import { Component, OnInit } from '@angular/core';
import { ContactFormService } from 'src/app/@service/contactForm.service';
import { ContactForm } from 'src/app/model/form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  contactForm = {
    name: '',
    email: '',
    comment: '',
    privacy: false
  };

  constructor(private contactService: ContactFormService) { }

  onSubmit() {
    this.contactService.sendContactForm(this.contactForm)
      .subscribe(
        response => {
          console.log('Messaggio inviato correttamente:', response);
          // Aggiungi qui la gestione della risposta, se necessario
        },
        error => {
          console.error('Errore durante l\'invio del messaggio:', error);
          // Aggiungi qui la gestione degli errori, se necessario
        }
      );
  }
}
