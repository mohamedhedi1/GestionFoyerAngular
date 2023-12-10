/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddUniversiteComponent } from './add-universite.component';

describe('AddUniversiteComponent', () => {
  let component: AddUniversiteComponent;
  let fixture: ComponentFixture<AddUniversiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUniversiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
