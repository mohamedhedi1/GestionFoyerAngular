import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsendedComponent } from './emailsended.component';

describe('EmailsendedComponent', () => {
  let component: EmailsendedComponent;
  let fixture: ComponentFixture<EmailsendedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailsendedComponent]
    });
    fixture = TestBed.createComponent(EmailsendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
