import { Component } from '@angular/core';
import {CardService} from '../services/card/card.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-list-component',
  imports: [CommonModule],
  templateUrl: './card-list-component.component.html',
  styleUrl: './card-list-component.component.css'
})
export class CardListComponentComponent {

  constructor(private cardService: CardService) { }

  cards: any[] = [];

  ngOnInit() {
    this.cardService.cards$.subscribe(cards => {
      console.log("cards recebidos:", cards);
      this.cards = cards;
    });

  }
}
