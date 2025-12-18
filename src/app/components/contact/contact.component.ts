import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextarea } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { AccordionModule } from 'primeng/accordion';
import { TagModule } from 'primeng/tag';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

interface Service {
  label: string;
  value: string;
  icon: string;
  description: string;
}

interface BudgetRange {
  label: string;
  value: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ProcessStep {
  title: string;
  description: string;
  duration: string;
  icon: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    InputTextarea,
    DropdownModule,
    DividerModule,
    AccordionModule,
    TagModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;

  services: Service[] = [
    {
      label: 'Développement Web',
      value: 'web',
      icon: 'pi pi-globe',
      description: 'Sites web, applications, e-commerce'
    },
    {
      label: 'Application Mobile',
      value: 'mobile',
      icon: 'pi pi-mobile',
      description: 'iOS, Android, Flutter, React Native'
    },
    {
      label: 'Infrastructure Cloud',
      value: 'cloud',
      icon: 'pi pi-cloud',
      description: 'AWS, Azure, Docker, Kubernetes'
    },
    {
      label: 'Cybersécurité',
      value: 'security',
      icon: 'pi pi-shield',
      description: 'Audit, protection, conformité'
    },
    {
      label: 'Intelligence Artificielle',
      value: 'ia',
      icon: 'pi pi-bolt',
      description: 'ML, NLP, Computer Vision'
    },
    {
      label: 'Maintenance & Support',
      value: 'maintenance',
      icon: 'pi pi-wrench',
      description: 'Support technique, mises à jour'
    },
    {
      label: 'Consulting IT',
      value: 'consulting',
      icon: 'pi pi-briefcase',
      description: 'Conseil, stratégie, transformation digitale'
    },
    {
      label: 'Autre',
      value: 'other',
      icon: 'pi pi-plus-circle',
      description: 'Projet spécifique à discuter'
    }
  ];

  budgetRanges: BudgetRange[] = [
    { label: 'Moins de 1M FCFA', value: '<1M' },
    { label: '1M - 5M FCFA', value: '1M-5M' },
    { label: '5M - 10M FCFA', value: '5M-10M' },
    { label: '10M - 25M FCFA', value: '10M-25M' },
    { label: 'Plus de 25M FCFA', value: '>25M' },
    { label: 'À discuter', value: 'discuss' }
  ];

  quickFAQ: FAQ[] = [
    {
      question: 'Quel est votre délai de réponse ?',
      answer: 'Nous répondons à toutes les demandes sous 24h maximum, souvent bien plus rapidement pour les demandes urgentes.'
    },
    {
      question: 'Le devis est-il gratuit ?',
      answer: 'Oui, tous nos devis sont gratuits et sans engagement. Nous étudions votre projet en détail avant de vous proposer une solution adaptée.'
    },
    {
      question: 'Travaillez-vous à distance ?',
      answer: 'Oui, nous collaborons avec des clients partout en Afrique et dans le monde. Nous organisons des réunions virtuelles régulières pour assurer un suivi optimal.'
    },
    {
      question: 'Proposez-vous un accompagnement post-livraison ?',
      answer: 'Absolument ! Nous offrons différentes formules de maintenance et support technique adaptées à vos besoins.'
    }
  ];

  processSteps: ProcessStep[] = [
    {
      title: 'Premier Contact',
      description: 'Vous remplissez le formulaire ou nous contactez directement',
      duration: 'Immédiat',
      icon: 'pi pi-comment'
    },
    {
      title: 'Analyse des Besoins',
      description: 'Entretien détaillé pour comprendre vos objectifs et contraintes',
      duration: '24-48h',
      icon: 'pi pi-search'
    },
    {
      title: 'Proposition & Devis',
      description: 'Présentation de la solution technique et estimation des coûts',
      duration: '3-5 jours',
      icon: 'pi pi-file-edit'
    },
    {
      title: 'Validation & Planning',
      description: 'Signature du contrat et planification détaillée du projet',
      duration: '1-2 jours',
      icon: 'pi pi-check-circle'
    },
    {
      title: 'Développement',
      description: 'Réalisation du projet avec suivi régulier et livraisons itératives',
      duration: 'Variable',
      icon: 'pi pi-code'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {
    emailjs.init(environment.emailJS.publicKey);
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      company: [''],
      service: ['', Validators.required],
      project: ['', [Validators.required, Validators.minLength(50)]],
      budget: ['']
    });
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.markFormGroupTouched(this.contactForm);
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur de validation',
        detail: 'Veuillez corriger les erreurs dans le formulaire.',
        life: 4000
      });
      return;
    }

    this.isSubmitting = true;

    try {
      const templateParams = this.prepareEmailTemplateParams();

      const response = await emailjs.send(
        environment.emailJS.serviceID,
        environment.emailJS.templateID,
        templateParams
      );

      console.log('✅ Email envoyé avec succès:', response);

      this.messageService.add({
        severity: 'success',
        summary: 'Demande envoyée avec succès !',
        detail: 'Nous vous recontacterons dans les plus brefs délais (sous 24h maximum).',
        life: 6000
      });

      this.contactForm.reset();
      this.scrollToTop();

    } catch (error) {
      console.error('❌ Erreur lors de l\'envoi:', error);

      this.messageService.add({
        severity: 'error',
        summary: 'Erreur d\'envoi',
        detail: 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone.',
        life: 6000
      });
    } finally {
      this.isSubmitting = false;
    }
  }

  private prepareEmailTemplateParams(): any {
    const formValue = this.contactForm.value;

    return {
      from_name: `${formValue.firstName} ${formValue.lastName}`,
      from_email: formValue.email,
      phone: formValue.phone || 'Non renseigné',
      company: formValue.company || 'Non renseigné',
      service: this.getServiceLabel(formValue.service),
      project_description: formValue.project,
      budget: this.getBudgetLabel(formValue.budget),
      message: `
🎯 Nouvelle demande de devis MemkoTech

👤 INFORMATIONS CLIENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Nom complet    : ${formValue.firstName} ${formValue.lastName}
Email          : ${formValue.email}
Téléphone      : ${formValue.phone || 'Non renseigné'}
Entreprise     : ${formValue.company || 'Non renseigné'}

🛠️ DÉTAILS DU PROJET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Service        : ${this.getServiceLabel(formValue.service)}
Budget estimé  : ${this.getBudgetLabel(formValue.budget)}

📝 DESCRIPTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formValue.project}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📅 Date de soumission : ${new Date().toLocaleString('fr-FR', {
        dateStyle: 'full',
        timeStyle: 'short'
      })}
🌐 Source : Site web MemkoTech
⏰ Action requise : Réponse sous 24h
      `,
      to_email: 'contact@memkotech.com'
    };
  }

  private getServiceLabel(value: string): string {
    const service = this.services.find(s => s.value === value);
    return service ? service.label : value;
  }

  private getBudgetLabel(value: string): string {
    if (!value) return 'Non renseigné';
    const budget = this.budgetRanges.find(b => b.value === value);
    return budget ? budget.label : value;
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  openWhatsApp(): void {
    const phone = '221784886752';
    const message = encodeURIComponent(
      'Bonjour MemkoTech, je souhaite discuter d\'un projet. Je viens de votre site web.'
    );
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
  }

  scrollToForm(): void {
    const formElement = document.querySelector('form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  private scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
