import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from '../../../widgets/layout/header/header.component';
import {CardService} from '../../../shared/card/service/card.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-create-ui-component',
  imports: [FormsModule, CommonModule, HeaderComponent, RouterLink],
  templateUrl: './create-card-component.component.html',
  styleUrl: './create-card-component.component.css'
})
export class CreateCardComponentComponent {

  constructor(private cardService: CardService) { }

  selectedFiles: File[] = [];

  onFileSelected(event: any) {
    const files = Array.from(event.target.files as FileList);
    this.selectedFiles.push(...files);
  }

  formData = {
    numberPaIc: '',
    objective: '',
    description: '',
    file: [] as File[]
  };

  submitForm() {
    const formData = {
      numberPaIc: this.formData.numberPaIc,
      objective: this.formData.objective,
      description: this.formData.description,
      files: this.formData.file
    };
    this.cardService.addCard(formData);
  }

  clickSubmit() {
    this.formData.file = this.selectedFiles;
    console.log(this.formData);
  }

}
