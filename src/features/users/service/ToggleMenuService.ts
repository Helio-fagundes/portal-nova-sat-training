import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleMenuService {
  public menuIsOpen: boolean = false;

  toggleMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;
  }
}
