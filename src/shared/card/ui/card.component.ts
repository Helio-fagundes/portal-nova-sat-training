import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CardService } from '../service/card.service';
import { Cards } from '../interface/cards';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  cards: Cards[] = [];

  constructor(
    private cardService: CardService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCards();
  }

  private loadCards(): void {
    this.cardService.getAll().subscribe({
      next: (cards) => {
        this.cards = cards;
      },
      error: (err) => {
        console.error('Erro ao buscar cards', err);
      }
    });
  }

  openDetail(card: Cards): void {
    this.router.navigate(['/card', card.number]);
  }
}
