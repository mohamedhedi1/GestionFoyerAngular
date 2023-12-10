import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainUniversiteComponent } from './main-universite/main-universite.component';
import { AddUniversiteComponent } from './add-universite/add-universite.component';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { UpdateUniversiteComponent } from './update-universite/update-universite.component';

const routes: Routes = [
  {path:'',component:MainUniversiteComponent},
  {path:'addUniversite',component:AddUniversiteComponent},
  {path:'listUniversite',component:ListUniversiteComponent},
  {path:'listUniversite/updateUniversite/:id',component:UpdateUniversiteComponent},
  {path:'listUniversite/addUniversite/:id/:nomUniversite',component:UpdateUniversiteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
