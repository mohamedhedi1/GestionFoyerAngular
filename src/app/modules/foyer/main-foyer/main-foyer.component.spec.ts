/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainFoyerComponent } from './main-foyer.component';

describe('MainFoyerComponent', () => {
  let component: MainFoyerComponent;
  let fixture: ComponentFixture<MainFoyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFoyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
