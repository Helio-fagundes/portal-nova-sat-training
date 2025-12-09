import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-popup',
  imports: [CommonModule],
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.css'
})
export class UiComponentPopup {

  @Input() title: string = '';
  @Input() message: string = '';
  @Input() confirmText?: string;
  @Input() cancelText?: string;
  @Input() typeImg: 'success' | 'warning' | 'error' = 'success';
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  verifyTheme(){
    if (document.documentElement.classList.contains('dark')){
      return true;
    }
    return false;
}
}
