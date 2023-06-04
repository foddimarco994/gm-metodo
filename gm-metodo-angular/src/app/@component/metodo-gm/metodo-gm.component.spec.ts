import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodoGmComponent } from './metodo-gm.component';

describe('MetodoGmComponent', () => {
  let component: MetodoGmComponent;
  let fixture: ComponentFixture<MetodoGmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetodoGmComponent]
    });
    fixture = TestBed.createComponent(MetodoGmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
