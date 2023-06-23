import { HttpErrorResponse } from '@angular/common/http';
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
    privacy: false,
    nameTouched: false,
    emailTouched: false
  };

  constructor(private contactService: ContactFormService) { }

  onSubmit() {

    // Verifica se i campi obbligatori sono stati toccati e sono validi
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.privacy) {
      console.log('Errore: Compilare tutti i campi obbligatori.');
      return; // Ferma l'esecuzione del metodo se ci sono campi mancanti
    }

    if (!this.isValidEmail(this.contactForm.email)) {
      console.log('Errore: L\'indirizzo email non è valido.');
      return; // Ferma l'esecuzione del metodo se l'email non è valida
    }

    this.contactService.sendContactForm(this.contactForm).subscribe({
      next: (response) =>{console.log('Messaggio inviato correttamente:', response);
      alert('Richiesta inviata con successo.');

       // Resetta i campi compilati
       this.contactForm.name = '';
       this.contactForm.email = '';
       this.contactForm.comment = '';
       this.contactForm.privacy = false;
    },
    error: (error) => {
      console.error('Errore durante l\'invio del messaggio:', error);

      if (error instanceof HttpErrorResponse && error.status === 422) {
        console.log('Errore: L\'indirizzo email non è valido.');
        alert('L\'indirizzo email non è valido.');
      } else {
        // Aggiungi qui la gestione degli altri errori, se necessario
      }
    },
    });
  }

  // Funzione di validazione dell'email
  isValidEmail(email: string): boolean {
    // Implementa la tua logica di validazione dell'email qui
    return true; // Cambia questa riga con la tua logica di validazione
  }
}