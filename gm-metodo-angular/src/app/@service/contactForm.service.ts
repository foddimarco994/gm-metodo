import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactForm } from '../model/form';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  contactFormUrl = ('https://formspree.io/f/mrgvnzal')

  constructor(private http: HttpClient) { }

  contactForm(formData: ContactForm): Observable<any> {
    const url = 'https://formspree.io/f/mrgvnzal';
  
    return this.http.post(url, formData);
  }
}
