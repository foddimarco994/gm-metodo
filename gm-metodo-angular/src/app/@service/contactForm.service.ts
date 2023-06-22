import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactForm } from '../model/form';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  private contactUrl = 'https://formspree.io/f/mrgvnzal';

  constructor(private http: HttpClient) { }

  sendContactForm(contactForm: any) {
    return this.http.post(this.contactUrl, contactForm);
  }
}
