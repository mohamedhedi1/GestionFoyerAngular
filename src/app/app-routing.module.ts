import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';

const routes: Routes = [
  { path: "", component: SideBarComponent },
  {
    path: 'mainFoyer', loadChildren: () =>
      import('./modules/foyer/foyer.module').then(m => m.FoyerModule)
  },
  {
    path: 'mainUniversite', loadChildren: () =>
      import('./modules/universite/universite.module').then(m => m.UniversiteModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
