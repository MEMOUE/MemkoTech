import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Partner {
  name: string;
  logo: string;
  url: string;
}

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {
  /** Titre affiché au-dessus du bandeau de logos */
  @Input() title = 'Ils nous font confiance';
  /** Sous-titre optionnel */
  @Input() subtitle = 'Des partenaires et clients qui comptent sur Anafa au quotidien';
  /** Fond clair (sections blanches) ou neutre */
  @Input() variant: 'light' | 'muted' = 'muted';

  partners: Partner[] = [
    { name: 'Eburnie Market', logo: '/images/logo-partenaire/logo.png', url: 'https://eburnie-market.com/accueil' },
    { name: 'MaGestionHotel', logo: '/images/logo-partenaire/MaGestionHotel.png', url: 'https://magestionhotel.com' },
    { name: 'Dunia Connect', logo: '/images/logo-partenaire/duniaconnect.jpeg', url: 'https://duniyaconnect.com' },
    { name: 'Nimba24', logo: '/images/logo-partenaire/Nimba24.png', url: 'https://nimba24.com' },
    { name: 'IUB University', logo: '/images/logo-partenaire/logo-iub.png', url: 'https://www.iub-university.com' },
  ];

  /** Liste dupliquée pour un défilement infini fluide */
  get marquee(): Partner[] {
    return [...this.partners, ...this.partners];
  }
}
