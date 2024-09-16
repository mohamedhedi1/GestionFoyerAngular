import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChambreComponent } from './list-chambre.component';

describe('ListChambreComponent', () => {
  let component: ListChambreComponent;
  let fixture: ComponentFixture<ListChambreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListChambreComponent]
    });
    fixture = TestBed.createComponent(ListChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
