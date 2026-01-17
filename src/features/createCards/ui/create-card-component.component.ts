import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from '../../../widgets/layout/header/header.component';
import {CardService} from '../../../shared/card/service/card.service';
import {Router, RouterLink} from '@angular/router';
import {Cards} from '../../../shared/card/interface/cards';
import {UiComponentPopup} from '../../../shared/popus/ui/ui.component';
import {InputFileComponent} from '../../../shared/input-file/input-file.component';
import { NavbarComponent } from "../../../widgets/layout/navbar/navbar.component";

@Component({
  selector: 'app-create-ui-component',
  standalone: true,
  imports: [FormsModule, CommonModule, HeaderComponent, UiComponentPopup, InputFileComponent, NavbarComponent],
  templateUrl: './create-card-component.component.html',
  styleUrl: './create-card-component.component.css'
})
export class CreateCardComponentComponent{

  constructor(private cardService: CardService,
              private router: Router,) { }

  showPopup = false;

  popup(){
    this.showPopup = !this.showPopup;
  }

  onConfirmed(){
    this.showPopup = !this.showPopup;
    this.router.navigate(['/home']);
  }

  formData:  Cards = {
    number: '',
    objective: '',
    description: ''};

  submitForm(form: any) {
    if (form.invalid) return;

    const payload = {
      number: this.formData.number,
      objective: this.formData.objective,
      description: this.formData.description
    };

    this.cardService.create(payload).subscribe({
      next: () => this.showPopup = true,
      error: err => console.error(err)
    });
  }

  protected readonly name = name;
}
