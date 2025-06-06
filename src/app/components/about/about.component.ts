import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonModule, CardModule, TimelineModule],
  templateUrl: './about.component.html'
  ,
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  timelineEvents = [
    {
      title: 'Création de MemkoTech',
      date: '2019',
      description: 'Lancement de l\'entreprise avec un développeur passionnés.',
      icon: 'pi pi-flag',
      color: 'blue',
      stats: [
        { value: '1', label: 'Fondateurs' },
        { value: '5', label: 'Premiers clients' }
      ]
    },
    {
      title: 'Expansion de l\'équipe',
      date: '2020',
      description: 'Recrutement de nouveaux talents et diversification des services.',
      icon: 'pi pi-users',
      color: 'green',
      stats: [
        { value: '12', label: 'Employés' },
        { value: '15', label: 'Projets livrés' }
      ]
    },
    {
      title: 'Certification et partenariats',
      date: '2022',
      description: 'Obtention des certifications AWS et Microsoft, partenariats stratégiques.',
      icon: 'pi pi-verified',
      color: 'orange',
      stats: [
        { value: '3', label: 'Certifications' },
        { value: '25', label: 'Clients satisfaits' }
      ]
    },
    {
      title: 'Leadership régional',
      date: '2024',
      description: 'Reconnaissance comme leader de la transformation digitale en Afrique de l\'Ouest.',
      icon: 'pi pi-star',
      color: 'purple',
      stats: [
        { value: '15+', label: 'Projets réalisés' },
        { value: '25', label: 'Membres équipe' }
      ]
    }
  ];

  teamMembers = [
    {
      name: 'Memoué KONE',
      role: 'Fondateur',
      bio: 'Visionnaire technologique avec 5+ ans d\'expérience en développement et management.',
      skills: ['Leadership', 'Strategy', 'Full-Stack'],
      icon: 'pi pi-user'
    },
    {
      name: 'Fatou Sow',
      role: 'CTO',
      bio: 'Experte en architectures cloud et cybersécurité, passionnée par l\'innovation.',
      skills: ['Cloud', 'Security', 'DevOps'],
      icon: 'pi pi-user'
    },
    {
      name: 'ATE TOUGUE ARISTIDE',
      role: 'Lead Developer',
      bio: 'Développeur senior spécialisé en applications web modernes et mobile.',
      skills: ['React', 'Angular', 'React Native'],
      icon: 'pi pi-user'
    },
    {
      name: 'Mohamed El Anewar Abiodoun Attanda ',
      role: 'UI/UX Designer',
      bio: 'Designer créative focalisée sur l\'expérience utilisateur et l\'accessibilité.',
      skills: ['UI/UX', 'Figma', 'Design System'],
      icon: 'pi pi-user'
    },
    {
      name: 'Mamadou Ba',
      role: 'Project Manager',
      bio: 'Expert en gestion de projets agiles et coordination d\'équipes techniques.',
      skills: ['Agile', 'Scrum', 'Communication'],
      icon: 'pi pi-user'
    },
    {
      name: 'Marième Fall',
      role: 'DevOps Engineer',
      bio: 'Spécialiste en infrastructure cloud et automatisation des déploiements.',
      skills: ['AWS', 'Docker', 'Kubernetes'],
      icon: 'pi pi-user'
    }
  ];
}
