import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private observer: IntersectionObserver | null = null;

  constructor() {}

  ngOnInit(): void {
    // Initialiser les animations au scroll
    this.initScrollAnimations();

    // Animer les éléments déjà visibles au chargement
    this.animateVisibleElements();
  }

  ngOnDestroy(): void {
    // Nettoyer l'observer pour éviter les fuites mémoire
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  /**
   * Initialise les animations déclenchées par le scroll
   */
  private initScrollAnimations(): void {
    // Vérifier que IntersectionObserver est supporté
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    // Configuration de l'observer
    const options: IntersectionObserverInit = {
      threshold: 0.1, // Déclencher quand 10% de l'élément est visible
      rootMargin: '0px 0px -50px 0px' // Déclencher 50px avant que l'élément n'entre dans la vue
    };

    // Créer l'observer
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Ajouter la classe d'animation
          entry.target.classList.add('animate-fade-in');

          // Optionnel: arrêter d'observer l'élément une fois animé
          // this.observer?.unobserve(entry.target);
        }
      });
    }, options);

    // Observer toutes les sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      this.observer?.observe(section);
    });

    // Observer les cartes de service individuellement
    const serviceCards = document.querySelectorAll('.group');
    serviceCards.forEach((card, index) => {
      // Ajouter un délai progressif pour chaque carte
      (card as HTMLElement).style.animationDelay = `${index * 0.1}s`;
      this.observer?.observe(card);
    });
  }

  /**
   * Anime les éléments déjà visibles au chargement de la page
   */
  private animateVisibleElements(): void {
    const hero = document.querySelector('section');
    if (hero) {
      hero.classList.add('animate-fade-in');
    }
  }

  /**
   * Scroll fluide vers une section spécifique
   * @param sectionId - L'ID de la section cible
   */
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  /**
   * Scroll vers le haut de la page
   */
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
