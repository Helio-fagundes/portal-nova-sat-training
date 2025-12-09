import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-theme-toggle',
  templateUrl: './button-theme-toggle.component.html',
  styleUrl: './button-theme-toggle.component.css'
})
export class ButtonThemeToggleComponent implements OnInit {

  isDarkMode = false;

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
    } else {
      this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this.updateHTMLClass();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;

    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');

    this.updateHTMLClass();
  }

  private updateHTMLClass() {
    const html = document.documentElement;

    if (this.isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }
}
