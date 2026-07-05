import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { PartnersComponent } from '../partners/partners.component';

interface Expertise {
  title: string;
  description: string;
  image: string;
  icon: string;
}

interface Advantage {
  title: string;
  description: string;
  icon: string;
}

interface Step {
  number: string;
  title: string;
  description: string;
  icon: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

interface GallerySlide {
  image: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonModule, CardModule, DividerModule, PartnersComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  heroImages: string[] = [
    '/images/code.jpg',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1920&q=80'
  ];

  currentImageIndex = 0;
  private intervalId: any;

  stats = [
    { value: '15+', label: 'Projets Réalisés' },
    { value: '98%', label: 'Satisfaction Client' },
    { value: '5+', label: "Années d'Expérience" },
    { value: '24/7', label: 'Support Technique' },
  ];

  expertises: Expertise[] = [
    { title: 'Développement Web & Mobile', description: 'Sites, applications et plateformes sur-mesure, modernes et performantes.', image: '/images/code.jpg', icon: 'pi pi-code' },
    { title: 'Intelligence Artificielle', description: 'Automatisation, analyse de données et solutions intelligentes pour gagner en productivité.', image: '/images/ia.jpg', icon: 'pi pi-bolt' },
    { title: 'Cloud & DevOps', description: 'Infrastructures scalables, déploiements automatisés et haute disponibilité.', image: '/images/cloud.jpg', icon: 'pi pi-cloud' },
    { title: 'Cybersécurité', description: 'Audits, protection des données et mise en conformité de vos systèmes.', image: '/images/cybersecurite.jpg', icon: 'pi pi-shield' },
    { title: 'Maintenance IT', description: 'Support réactif, supervision et optimisation continue de votre parc.', image: '/images/maintenance.jpg', icon: 'pi pi-cog' },
    { title: 'Consulting IT', description: 'Conseil stratégique et accompagnement dans votre transformation digitale.', image: '/images/consulting.jpg', icon: 'pi pi-briefcase' },
  ];

  advantages: Advantage[] = [
    { title: 'Excellence Technique', description: "Une équipe d'experts passionnés utilisant les meilleures pratiques et technologies de pointe.", icon: 'pi pi-star' },
    { title: 'Approche Collaborative', description: 'Nous travaillons main dans la main avec nos clients pour comprendre leurs besoins réels.', icon: 'pi pi-users' },
    { title: 'Livraison Rapide', description: 'Méthodes agiles et processus optimisés pour des délais maîtrisés et respectés.', icon: 'pi pi-clock' },
    { title: 'Support Dédié', description: 'Un accompagnement personnalisé avant, pendant et après la mise en production.', icon: 'pi pi-heart' },
  ];

  steps: Step[] = [
    { number: '01', title: 'Écoute & Analyse', description: 'Nous étudions vos besoins et définissons ensemble les objectifs du projet.', icon: 'pi pi-search' },
    { number: '02', title: 'Conception', description: 'Architecture technique et maquettes pour une solution sur-mesure.', icon: 'pi pi-pencil' },
    { number: '03', title: 'Développement', description: 'Réalisation en cycles agiles avec des points réguliers et transparents.', icon: 'pi pi-code' },
    { number: '04', title: 'Lancement & Suivi', description: 'Mise en production sécurisée, formation et support continu.', icon: 'pi pi-send' },
  ];

  testimonials: Testimonial[] = [
    { quote: "Anafa a digitalisé toute notre activité avec un professionnalisme remarquable. Une équipe à l'écoute et réactive.", name: 'Eburnie Market', role: 'Plateforme e-commerce', initials: 'EM' },
    { quote: 'Une solution de gestion fiable et parfaitement adaptée à nos besoins. Nous recommandons vivement.', name: 'MaGestionHotel', role: 'Gestion hôtelière', initials: 'MH' },
    { quote: 'Accompagnement de qualité et expertise technique au rendez-vous tout au long du projet.', name: 'Dunia Connect', role: 'Solution digitale', initials: 'DC' },
  ];

  // ---- Carrousel "Nos Réalisations" ----
  gallery: GallerySlide[] = [
    { image: '/images/code.jpg', title: 'Plateformes Web sur-mesure', category: 'Développement' },
    { image: '/images/ia.jpg', title: 'Solutions d\'Intelligence Artificielle', category: 'IA & Data' },
    { image: '/images/cloud.jpg', title: 'Infrastructures Cloud scalables', category: 'Cloud & DevOps' },
    { image: '/images/cybersecurite.jpg', title: 'Sécurisation des systèmes', category: 'Cybersécurité' },
    { image: '/images/pc.jpg', title: 'Maintenance & Support IT', category: 'Maintenance' },
    { image: '/images/consulting.jpg', title: 'Conseil & Transformation digitale', category: 'Consulting' },
  ];
  currentSlide = 0;
  private galleryIntervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.heroImages.length;
    }, 5000);

    this.galleryIntervalId = setInterval(() => this.nextSlide(), 4500);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    if (this.galleryIntervalId) {
      clearInterval(this.galleryIntervalId);
    }
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.gallery.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.gallery.length) % this.gallery.length;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }
}
