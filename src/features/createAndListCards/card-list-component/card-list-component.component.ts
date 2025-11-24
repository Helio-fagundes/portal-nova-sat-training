import { Component } from '@angular/core';
import {CardService} from '../../../shared/card/service/card.service';
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-ui-list-component',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card-list-component.component.html',
  styleUrl: './card-list-component.component.css'
})
export class CardListComponentComponent {

  constructor(private cardService: CardService,
              private router: Router) {

  }

  cards: any[] = [];

  ngOnInit() {
    this.cardService.cards$.subscribe(cards => {
      console.log("cards recebidos:", cards);
      this.cards = cards;
    });

  }

  protected openDetail(card: any) {
    this.router.navigate(['/card', card.numberPaIc]);
  }
}
