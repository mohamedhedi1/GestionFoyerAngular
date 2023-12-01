import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users',loadChildren:() =>
    import('./modules/user/user.module').then(m=>m.UserModule) },
  { path: 'etudiants',loadChildren:() =>
    import('./modules/etudiant/etudiant.module').then(m=>m.EtudiantModule) },
 
    { path: '**', component: NotFoundComponent },


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
