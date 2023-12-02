import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoyerRoutingModule } from './foyer-routing.module';
import { AddFoyerComponent } from './add-foyer/add-foyer.component';
import { UpdateFoyerComponent } from './update-foyer/update-foyer.component';
import { ListFoyerComponent } from './list-foyer/list-foyer.component';
import { MainFoyerComponent } from './main-foyer/main-foyer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AddFoyerComponent, UpdateFoyerComponent, ListFoyerComponent, MainFoyerComponent],
  imports: [
    CommonModule,
    FoyerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class FoyerModule { }
