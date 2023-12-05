import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateBlocComponent } from './update-bloc/update-bloc.component';
import { AddBlocComponent } from './add-bloc/add-bloc.component';
import { ListBlocComponent } from './list-bloc/list-bloc.component';

const routes: Routes = [
  { path: 'listBloc/updateBloc/:id', component: UpdateBlocComponent },
  { path: "addBloc", component: AddBlocComponent },
  { path: "listBloc", component: ListBlocComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlocRoutingModule { }
