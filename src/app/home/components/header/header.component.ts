import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isDarkmode: boolean;
  
  constructor(private renderer: Renderer2) {
    this.isDarkmode = localStorage.getItem('isDarkmode') === 'true';
    this.setTheme();
  }

  toggleTheme(): void {
    this.isDarkmode = !this.isDarkmode;
    localStorage.setItem('isDarkmode', this.isDarkmode.toString());
    this.setTheme();
  }

  setTheme(): void {
    const theme = this.isDarkmode ? 'dark' : 'light';
    this.renderer.setAttribute(document.documentElement, 'data-bs-theme', theme);
  }
}
