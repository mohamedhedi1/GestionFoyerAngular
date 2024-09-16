import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';

const routes: Routes = [
  { path: '', component: ListEtudiantComponent },
  {
    path:'add', component: AddEtudiantComponent
  },
  { path: 'update/:id', component: UpdateEtudiantComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
