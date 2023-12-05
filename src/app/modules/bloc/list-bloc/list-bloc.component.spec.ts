/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListBlocComponent } from './list-bloc.component';

describe('ListBlocComponent', () => {
  let component: ListBlocComponent;
  let fixture: ComponentFixture<ListBlocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListBlocComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
