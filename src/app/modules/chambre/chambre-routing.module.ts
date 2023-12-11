import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListChambreComponent } from './list-chambre/list-chambre.component';
import { AddChambreComponent } from './add-chambre/add-chambre.component';
import { UpdateChambreComponent } from './update-chambre/update-chambre.component';

const routes: Routes = [
   {path : '', component: ListChambreComponent},
   {path: 'add',component: AddChambreComponent},
   {path: 'update/:id' , component: UpdateChambreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChambreRoutingModule { }
