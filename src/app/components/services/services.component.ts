import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonModule, CardModule, AccordionModule],
  templateUrl: './services.component.html',
  // Pas de styleUrls - on utilise Tailwind
})
export class ServicesComponent {
  activeTab: string = 'development';

  serviceTabs = [
    { id: 'development', label: 'Développement', icon: 'pi pi-code' },
    { id: 'ia', label: 'IA', icon: 'pi pi-reddit' },
    { id: 'infrastructure', label: 'Infrastructure', icon: 'pi pi-cloud' },
    { id: 'security', label: 'Sécurité', icon: 'pi pi-shield' },
    { id: 'maintenance', label: 'Maintenance', icon: 'pi pi-cog' },
  ];

  webTechnologies = [
    { name: 'React.js', icon: 'pi pi-tablet' },
    { name: 'Angular', icon: 'pi pi-tablet' },
    { name: 'Vue.js', icon: 'pi pi-tablet' },
    { name: 'Node.js', icon: 'pi pi-server' },
    { name: 'Java', icon: 'pi pi-server' },
    { name: 'Python', icon: 'pi pi-server' },
    { name: 'PHP', icon: 'pi pi-server' },
    { name: 'Go', icon: 'pi pi-server' },
    { name: 'C#', icon: 'pi pi-server' },
    { name: 'JavaScript', icon: 'pi pi-server' },
  ];

  mobileTechnologies = [
    { name: 'React Native', icon: 'pi pi-mobile' },
    { name: 'Flutter', icon: 'pi pi-mobile' },
    { name: 'iOS Native', icon: 'pi pi-apple' },
    { name: 'Android Native', icon: 'pi pi-android' },
  ];

  processSteps = [
    {
      title: 'Analyse & Audit',
      description: 'Nous analysons vos besoins et réalisons un audit technique complet de votre infrastructure existante.',
    },
    {
      title: 'Conception & Planning',
      description: 'Élaboration d\'une solution sur-mesure avec planning détaillé et architecture technique.',
    },
    {
      title: 'Développement',
      description: 'Implémentation de la solution avec méthodologie agile et tests continus.',
    },
    {
      title: 'Déploiement',
      description: 'Mise en production sécurisée avec formation des équipes et transfert de compétences.',
    },
    {
      title: 'Support & Maintenance',
      description: 'Accompagnement continu avec support technique et évolutions fonctionnelles.',
    },
  ];

  setActiveTab(tab: string): void {
    this.activeTab = tab;

    // Scroll fluide vers le contenu
    const contentElement = document.querySelector('.animate-fade-in');
    if (contentElement) {
      contentElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
