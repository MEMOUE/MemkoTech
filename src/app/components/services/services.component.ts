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
  imports: [CommonModule, RouterLink, ButtonModule, CardModule, TabViewModule, AccordionModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {}