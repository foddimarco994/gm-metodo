import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecensioneComponent } from './recensione.component';

describe('RecensioneComponent', () => {
  let component: RecensioneComponent;
  let fixture: ComponentFixture<RecensioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecensioneComponent]
    });
    fixture = TestBed.createComponent(RecensioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
