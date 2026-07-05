import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { TagModule } from 'primeng/tag';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

interface PhoneOption {
  label: string;
  number: string;
}

interface ContactMethod {
  title: string;
  description: string;
  icon: string;
  value: string;
  action: () => void;
  buttonLabel: string;
  buttonIcon: string;
  accent: string;
  phoneOptions?: PhoneOption[];
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
    ButtonModule,
    AccordionModule,
    TagModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  private readonly whatsappNumber = '221784886752';
  private readonly email = 'contact@anafa.tech';
  private readonly mapsUrl = 'https://maps.app.goo.gl/QKmLmyaqPGVepNVY8';

  contactMethods: ContactMethod[] = [
    {
      title: 'WhatsApp',
      description: 'La réponse la plus rapide, souvent en quelques minutes',
      icon: 'pi pi-whatsapp',
      value: '+221 78 488 67 52',
      action: () => this.openWhatsApp(),
      buttonLabel: 'Discuter sur WhatsApp',
      buttonIcon: 'pi pi-whatsapp',
      accent: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Téléphone',
      description: 'Du lundi au vendredi, de 8h à 18h',
      icon: 'pi pi-phone',
      value: '+225 07 59 19 40 84\n+221 78 488 67 52',
      action: () => this.call('+2250759194084'),
      buttonLabel: 'Appeler maintenant',
      buttonIcon: 'pi pi-phone',
      accent: 'from-blue-500 to-blue-700',
      phoneOptions: [
        { label: 'Côte d\'Ivoire', number: '+2250759194084' },
        { label: 'Sénégal', number: '+221784886752' }
      ]
    },
    {
      title: 'Email',
      description: 'Réponse garantie sous 24h',
      icon: 'pi pi-envelope',
      value: 'contact@anafa.tech',
      action: () => this.sendEmail(),
      buttonLabel: 'Envoyer un email',
      buttonIcon: 'pi pi-send',
      accent: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Nos bureaux',
      description: 'Bouaké · Abidjan · Dakar',
      icon: 'pi pi-map-marker',
      value: 'Voir sur Google Maps',
      action: () => this.openMaps(),
      buttonLabel: 'Voir sur la carte',
      buttonIcon: 'pi pi-map-marker',
      accent: 'from-orange-500 to-red-600'
    }
  ];

  quickFAQ: FAQ[] = [
    {
      question: 'Quel est votre délai de réponse ?',
      answer: 'Nous répondons à toutes les demandes sous 24h maximum, souvent bien plus rapidement via WhatsApp.'
    },
    {
      question: 'Le devis est-il gratuit ?',
      answer: 'Oui, tous nos devis sont gratuits et sans engagement.'
    },
    {
      question: 'Travaillez-vous à distance ?',
      answer: 'Oui, nous collaborons avec des clients partout en Afrique et dans le monde.'
    },
    {
      question: 'Proposez-vous un accompagnement post-livraison ?',
      answer: 'Absolument ! Nous offrons différentes formules de maintenance et support technique.'
    }
  ];

  processSteps: ProcessStep[] = [
    { title: 'Premier Contact', description: 'Vous nous écrivez sur WhatsApp, par email ou par téléphone', duration: 'Immédiat', icon: 'pi pi-comment' },
    { title: 'Analyse des Besoins', description: 'Entretien détaillé pour comprendre vos objectifs', duration: '24-48h', icon: 'pi pi-search' },
    { title: 'Proposition & Devis', description: 'Présentation de la solution et estimation des coûts', duration: '3-5 jours', icon: 'pi pi-file-edit' },
    { title: 'Validation & Planning', description: 'Signature du contrat et planification du projet', duration: '1-2 jours', icon: 'pi pi-check-circle' },
    { title: 'Développement', description: 'Réalisation du projet avec suivi régulier', duration: 'Variable', icon: 'pi pi-code' }
  ];

  constructor(private messageService: MessageService) {}

  openWhatsApp(): void {
    const message = encodeURIComponent('Bonjour Anafa, je souhaite discuter d\'un projet. Je viens de votre site web.');
    window.open(`https://wa.me/${this.whatsappNumber}?text=${message}`, '_blank');
  }

  call(number: string): void {
    window.location.href = `tel:${number}`;
  }

  sendEmail(): void {
    window.location.href = `mailto:${this.email}?subject=${encodeURIComponent('Demande de contact - Site web')}`;
  }

  openMaps(): void {
    window.open(this.mapsUrl, '_blank', 'noopener,noreferrer');
  }

  async copyToClipboard(value: string, label: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(value);
      this.messageService.add({
        severity: 'success',
        summary: 'Copié !',
        detail: `${label} copié dans le presse-papier.`,
        life: 3000
      });
    } catch {
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: 'Impossible de copier automatiquement.',
        life: 3000
      });
    }
  }

  scrollToContact(): void {
    const el = document.getElementById('contact-methods');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
