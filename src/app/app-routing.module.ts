import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';

const routes: Routes = [
  { path: "", component: SideBarComponent },
  {
    path: 'mainBloc', loadChildren: () =>
      import('./modules/bloc/bloc.module').then(m => m.BlocModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
