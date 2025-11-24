import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {AuthService} from '../../../features/login/service/auth.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;
  showLogout = false;

  constructor(private router: Router,
              private authService: AuthService) {
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  openLogout() {
    this.showLogout = true;
  }

  cancelLogout() {
    this.showLogout = false;
  }

  confirmLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
