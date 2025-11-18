import { Component } from '@angular/core';
import {CardService} from '../services/card/card.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-card-list-component',
  imports: [CommonModule, RouterLink],
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
