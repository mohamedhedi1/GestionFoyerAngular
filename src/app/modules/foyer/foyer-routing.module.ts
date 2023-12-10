import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainFoyerComponent } from './main-foyer/main-foyer.component';
import { UpdateFoyerComponent } from './update-foyer/update-foyer.component';
import { AddFoyerComponent } from './add-foyer/add-foyer.component';
import { ListFoyerComponent } from './list-foyer/list-foyer.component';

const routes: Routes = [

  { path: '', component: MainFoyerComponent },
  { path: 'listFoyer/updateFoyer/:id', component: UpdateFoyerComponent },
  { path: "addFoyer", component: AddFoyerComponent },
  { path: "listFoyer", component: ListFoyerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoyerRoutingModule { }
