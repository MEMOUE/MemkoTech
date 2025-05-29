import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextarea } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

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
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;

  services = [
    { label: 'Développement Web', value: 'web' },
    { label: 'Application Mobile', value: 'mobile' },
    { label: 'Infrastructure Cloud', value: 'cloud' },
    { label: 'Cybersécurité', value: 'security' },
    { label: 'Maintenance & Support', value: 'maintenance' },
    { label: 'Consulting IT', value: 'consulting' },
    { label: 'Autre', value: 'other' }
  ];

  budgetRanges = [
    { label: 'Moins de 1M FCFA', value: '<1M' },
    { label: '1M - 5M FCFA', value: '1M-5M' },
    { label: '5M - 10M FCFA', value: '5M-10M' },
    { label: '10M - 25M FCFA', value: '10M-25M' },
    { label: 'Plus de 25M FCFA', value: '>25M' },
    { label: 'À discuter', value: 'discuss' }
  ];

  quickFAQ = [
    {
      question: 'Quel est votre délai de réponse ?',
      answer: 'Nous répondons à toutes les demandes sous 24h maximum.'
    },
    {
      question: 'Le devis est-il gratuit ?',
      answer: 'Oui, tous nos devis sont gratuits et sans engagement.'
    },
    {
      question: 'Travaillez-vous à distance ?',
      answer: 'Oui, nous collaborons avec des clients partout en Afrique.'
    }
  ];

  processSteps = [
    {
      title: 'Premier Contact',
      description: 'Vous remplissez le formulaire ou nous contactez directement',
      duration: 'Immédiat'
    },
    {
      title: 'Analyse des Besoins',
      description: 'Entretien détaillé pour comprendre vos objectifs',
      duration: '24-48h'
    },
    {
      title: 'Proposition & Devis',
      description: 'Présentation de la solution et estimation des coûts',
      duration: '3-5 jours'
    },
    {
      title: 'Validation & Planning',
      description: 'Signature du contrat et planification du projet',
      duration: '1-2 jours'
    },
    {
      title: 'Développement',
      description: 'Réalisation du projet avec suivi régulier',
      duration: 'Variable'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      company: [''],
      service: ['', Validators.required],
      project: ['', Validators.required],
      budget: ['']
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simuler l'envoi du formulaire
      setTimeout(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Demande envoyée !',
          detail: 'Nous vous recontacterons dans les plus brefs délais.',
          life: 5000
        });
        
        this.contactForm.reset();
        this.isSubmitting = false;
      }, 2000);
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: 'Veuillez corriger les erreurs dans le formulaire.',
        life: 3000
      });
    }
  }

  openWhatsApp() {
    window.open('https://wa.me/221701234567?text=Bonjour MemkoTech, je souhaite discuter d\'un projet.', '_blank');
  }
}