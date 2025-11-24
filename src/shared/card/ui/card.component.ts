import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-ui',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() cardJson: object = {
    numberPaIc: 'Default Number Pa/Ic',
    objective: 'Default Objective',
    description: 'Default Description',
    imageUrl: 'https://via.placeholder.com/150'
  };
}
