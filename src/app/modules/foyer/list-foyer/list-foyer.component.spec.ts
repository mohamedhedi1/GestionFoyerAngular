/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListFoyerComponent } from './list-foyer.component';

describe('ListFoyerComponent', () => {
  let component: ListFoyerComponent;
  let fixture: ComponentFixture<ListFoyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFoyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
