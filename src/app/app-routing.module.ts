import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';

const routes: Routes = [
  { path: "", component: SideBarComponent },
  {
    path: 'mainFoyer', loadChildren: () =>
      import('./modules/foyer/foyer.module').then(m => m.FoyerModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
