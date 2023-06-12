import { TestBed } from '@angular/core/testing';

import { ContactFormService } from './contactForm.service';

describe('ContactFormService', () => {
  let service: ContactFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
