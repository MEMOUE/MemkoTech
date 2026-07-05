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

  // ---- Infrastructure Cloud & DevOps ----
  cloudTechnologies = [
    { name: 'AWS', icon: 'pi pi-amazon' },
    { name: 'Microsoft Azure', icon: 'pi pi-microsoft' },
    { name: 'Google Cloud', icon: 'pi pi-google' },
    { name: 'Docker', icon: 'pi pi-box' },
    { name: 'Kubernetes', icon: 'pi pi-sitemap' },
    { name: 'Terraform (IaC)', icon: 'pi pi-server' },
    { name: 'CI/CD', icon: 'pi pi-sync' },
    { name: 'Monitoring', icon: 'pi pi-chart-line' },
  ];

  infrastructureOffers = [
    'Architecture cloud scalable & haute disponibilité',
    'Conteneurisation (Docker, Kubernetes)',
    'Infrastructure as Code (Terraform, Ansible)',
    'Pipelines CI/CD automatisés',
    'Monitoring & observabilité (Prometheus, Grafana)',
    'Migration vers le cloud',
    'Optimisation des coûts (FinOps)',
  ];

  // ---- Cybersécurité & DevSecOps ----
  securityTechnologies = [
    { name: 'Tests d\'intrusion', icon: 'pi pi-search' },
    { name: 'SIEM / SOC', icon: 'pi pi-desktop' },
    { name: 'Zero Trust', icon: 'pi pi-lock' },
    { name: 'IAM / MFA', icon: 'pi pi-id-card' },
    { name: 'Chiffrement', icon: 'pi pi-key' },
    { name: 'Pare-feu / WAF', icon: 'pi pi-shield' },
    { name: 'EDR / XDR', icon: 'pi pi-eye' },
    { name: 'Conformité RGPD', icon: 'pi pi-verified' },
  ];

  securityOffers = [
    'Audit de sécurité & tests d\'intrusion (pentest)',
    'Sécurisation des applications (DevSecOps)',
    'Protection des données & conformité RGPD',
    'Gestion des identités et des accès (IAM/MFA)',
    'Surveillance continue 24/7 (SOC)',
    'Réponse aux incidents & remédiation',
    'Sensibilisation et formation des équipes',
  ];

  // ---- Maintenance & Support ----
  maintenanceTechnologies = [
    { name: 'Supervision 24/7', icon: 'pi pi-desktop' },
    { name: 'TMA', icon: 'pi pi-wrench' },
    { name: 'Sauvegardes / PRA', icon: 'pi pi-database' },
    { name: 'Mises à jour', icon: 'pi pi-refresh' },
    { name: 'Helpdesk', icon: 'pi pi-headphones' },
    { name: 'SLA garantis', icon: 'pi pi-clock' },
    { name: 'Optimisation', icon: 'pi pi-bolt' },
    { name: 'Reporting', icon: 'pi pi-chart-bar' },
  ];

  maintenanceOffers = [
    'Maintenance corrective & évolutive (TMA)',
    'Supervision proactive 24/7',
    'Sauvegardes & plan de reprise d\'activité (PRA)',
    'Mises à jour de sécurité régulières',
    'Optimisation continue des performances',
    'Support multi-niveaux (helpdesk)',
    'Contrats de service (SLA) garantis',
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
