import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    ButtonModule,
    MenubarModule
  ],
  template: `
    <header class="header">
      <nav class="nav-container">
        <div class="logo">
          <h2 routerLink="/">
            <i class="pi pi-bolt"></i>
            MemkoTech
          </h2>
        </div>
        <ul class="nav-menu">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Accueil</a></li>
          <li><a routerLink="/services" routerLinkActive="active">Services</a></li>
          <li><a routerLink="/about" routerLinkActive="active">À propos</a></li>
          <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
        </ul>
        <div class="nav-cta">
          <p-button
            label="Devis gratuit"
            icon="pi pi-phone"
            styleClass="p-button-outlined"
            routerLink="/contact">
          </p-button>
        </div>
      </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3><i class="pi pi-bolt"></i> MemkoTech</h3>
          <p>Excellence technologique et innovation au service de votre entreprise.</p>
          <div class="social-links">
            <i class="pi pi-facebook"></i>
            <i class="pi pi-twitter"></i>
            <i class="pi pi-linkedin"></i>
            <i class="pi pi-instagram"></i>
          </div>
        </div>
        <div class="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Développement Web</li>
            <li>Applications Mobile</li>
            <li>Infrastructure Cloud</li>
            <li>Cybersécurité</li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Contact</h4>
          <p><i class="pi pi-phone"></i>+221 78 488 67 52</p>
          <p><i class="pi pi-envelope"></i> contact&#64;memkotech.com</p>
          <p><i class="pi pi-map-marker"></i> Dakar, Sénégal</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 MemkoTech. Tous droits réservés.</p>
      </div>
    </footer>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    }

    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo h2 {
      color: white;
      margin: 0;
      font-weight: 700;
      font-size: 1.5rem;
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .logo h2:hover {
      transform: scale(1.05);
    }

    .logo i {
      color: #ffd700;
      margin-right: 0.5rem;
    }

    .nav-menu {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 2rem;
    }

    .nav-menu a {
      color: white;
      text-decoration: none;
      font-weight: 500;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      transition: all 0.3s ease;
      position: relative;
    }

    .nav-menu a:hover,
    .nav-menu a.active {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }

    .nav-cta ::ng-deep .p-button {
      background: linear-gradient(45deg, #ff6b6b, #feca57);
      border: none;
      font-weight: 600;
      padding: 0.75rem 1.5rem;
      transition: all 0.3s ease;
    }

    .nav-cta ::ng-deep .p-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
    }

    main {
      margin-top: 80px;
      min-height: calc(100vh - 80px);
    }

    .footer {
      background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
      color: white;
      padding: 3rem 0 1rem;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .footer-section h3 {
      color: #ffd700;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    .footer-section h4 {
      color: #ecf0f1;
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }

    .footer-section p {
      margin-bottom: 0.5rem;
      opacity: 0.9;
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
    }

    .footer-section ul li {
      padding: 0.25rem 0;
      opacity: 0.8;
      transition: opacity 0.3s ease;
    }

    .footer-section ul li:hover {
      opacity: 1;
    }

    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }

    .social-links i {
      font-size: 1.5rem;
      cursor: pointer;
      transition: all 0.3s ease;
      color: #bdc3c7;
    }

    .social-links i:hover {
      color: #ffd700;
      transform: translateY(-3px);
    }

    .footer-bottom {
      text-align: center;
      padding-top: 2rem;
      margin-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      opacity: 0.7;
    }

    @media (max-width: 768px) {
      .nav-container {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
      }

      .nav-menu {
        gap: 1rem;
      }

      main {
        margin-top: 120px;
      }
    }
  `]
})
export class AppComponent {
  title = 'MemkoTech';
}
