import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChambreRoutingModule } from './chambre-routing.module';
import { ListChambreComponent } from './list-chambre/list-chambre.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AddChambreComponent } from './add-chambre/add-chambre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateChambreComponent } from './update-chambre/update-chambre.component';


@NgModule({
  declarations: [
    ListChambreComponent,
    AddChambreComponent,
    UpdateChambreComponent
  ],
  imports: [
    CommonModule,
    ChambreRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    
    
  ]
})
export class ChambreModule { }
