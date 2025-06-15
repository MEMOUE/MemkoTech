import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule, TabViewModule, AccordionModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  // Gestion de l'onglet actif
  activeTab: string = 'development';

  /**
   * Change l'onglet actif
   * @param tab - L'identifiant de l'onglet à activer
   */
  setActiveTab(tab: string): void {
    this.activeTab = tab;

    // Scroll fluide vers le contenu (optionnel)
    const contentElement = document.querySelector('.service-content-container');
    if (contentElement) {
      contentElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
