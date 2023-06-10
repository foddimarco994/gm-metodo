import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  nomeCognome: string = '';
  email: string = '';
  commento: string = '';
  privacyAccettata = false;

  controllaPrivacy() {
    this.privacyAccettata = !this.privacyAccettata;
  }

  submitForm() {
    // Logica per l'invio del modulo
  }
}
