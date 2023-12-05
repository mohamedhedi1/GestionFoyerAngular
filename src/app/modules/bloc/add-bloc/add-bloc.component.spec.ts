import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddBlocComponent } from './add-bloc.component';

describe('AddBlocComponent', () => {
  let component: AddBlocComponent;
  let fixture: ComponentFixture<AddBlocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddBlocComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
