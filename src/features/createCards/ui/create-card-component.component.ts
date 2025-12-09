import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from '../../../widgets/layout/header/header.component';
import {CardService} from '../../../shared/card/service/card.service';
import {Router, RouterLink} from '@angular/router';
import {Cards} from '../../../shared/card/interface/cards';
import {UiComponentPopup} from '../../../shared/popus/ui/ui.component';
import {InputFileComponent} from '../../../shared/input-file/input-file.component';

@Component({
  selector: 'app-create-ui-component',
  standalone: true,
  imports: [FormsModule, CommonModule, HeaderComponent, RouterLink, UiComponentPopup, InputFileComponent],
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

  selectedFiles: File[] = [];

  formData:  Cards = {
    numberPaIc: 0,
    objective: '',
    description: '',
    file: [] as File[]
  };

  onFileSelected(event: any) {
    const files = Array.from(event.target.files) as File[];
    this.selectedFiles = [...this.selectedFiles, ...files];
  }

  submitForm(form: any) {

    if(form.invalid){
      window.alert('não é possivel criar um card com informações invalidas ou insuficiente.')
      return
    }
    this.formData.file = this.selectedFiles;

    const formData: Cards = {
      numberPaIc: this.formData.numberPaIc,
      objective: this.formData.objective,
      description: this.formData.description,
      file: this.formData.file
    };
    this.cardService.addCard(formData);
    this.showPopup = true;
  }

  protected readonly name = name;
}
