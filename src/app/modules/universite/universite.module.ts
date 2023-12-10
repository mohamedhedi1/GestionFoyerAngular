import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversiteRoutingModule } from './universite-routing.module';
import { AddUniversiteComponent } from './add-universite/add-universite.component';
import { UpdateUniversiteComponent } from './update-universite/update-universite.component';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { MainUniversiteComponent } from './main-universite/main-universite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AddUniversiteComponent,UpdateUniversiteComponent,ListUniversiteComponent,MainUniversiteComponent],
  imports: [
    CommonModule,
    UniversiteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class UniversiteModule { }
