import { Component } from '@angular/core';
import {NavbarComponent} from '../../widgets/layout/navbar/navbar.component';
import { HeaderComponent } from "../../widgets/layout/header/header.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [
    NavbarComponent,
    HeaderComponent,
    CommonModule,
    FormsModule
],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  formData = {
    nome: '',
    email: '',
    mensagem: ''
  };

  abrirMailto() {
  const f = this.formData;
  window.open(
    `mailto:suporte@empresa.com?subject=Contato&body=Nome: ${f.nome}%0D%0AEmail: ${f.email}%0D%0AMensagem: ${f.mensagem}`
  );
}
}
