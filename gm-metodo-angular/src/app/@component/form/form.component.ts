import { Component, OnInit } from '@angular/core';
import { ContactFormService } from 'src/app/@service/contactForm.service';
import { ContactForm } from 'src/app/model/form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formData: ContactForm = {
    nomeCognome: '',
    email: '',
    commento: ''
  };
  privacyAccettata = false;

  constructor(private contactFormService: ContactFormService) {}

  ngOnInit() {
    // Qui puoi inizializzare le dipendenze e fare altre operazioni necessarie
  }

  controllaPrivacy() {
    this.privacyAccettata = !this.privacyAccettata;
  }

  submitForm() {
    this.contactFormService.contactForm(this.formData).subscribe({
      next: (response) => {
        console.log('Successo:', response);
        // Gestisci la risposta dal server
      },
      error: (error) => {
        console.error('Errore:', error);
        // Gestisci gli errori
      }
    });
  }
}
