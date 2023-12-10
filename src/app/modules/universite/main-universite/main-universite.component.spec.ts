/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainUniversiteComponent } from './main-universite.component';

describe('MainUniversiteComponent', () => {
  let component: MainUniversiteComponent;
  let fixture: ComponentFixture<MainUniversiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainUniversiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainUniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
