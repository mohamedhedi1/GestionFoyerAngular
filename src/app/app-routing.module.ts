import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { HomeComponent } from './modules/home/home.component';
import { AuthGuard } from './core/guards/authentification.guard';
import { RoleGuard } from './core/guards/role-guard.guard';
import { StudentGuard } from './core/guards/student-guard';
import { ResetpasswordComponent } from './modules/resetpassword/resetpassword.component';
import { NewpasswordComponent } from './modules/newpassword/newpassword.component';
import { EmailsendedComponent } from './modules/emailsended/emailsended.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users',loadChildren:() =>
    import('./modules/user/user.module').then(m=>m.UserModule),canActivate: [AuthGuard,RoleGuard] },
  { path: 'etudiants',loadChildren:() =>
    import('./modules/etudiant/etudiant.module').then(m=>m.EtudiantModule),canActivate: [AuthGuard,RoleGuard] },
    {
      path:"home",component: HomeComponent,canActivate: [AuthGuard,StudentGuard]
    },
    {
      path: 'resetpassword',
      component: ResetpasswordComponent
    }, 
    {
      path : 'newpassword',
      component : NewpasswordComponent
    },
    {
      path : 'emailsended', component : EmailsendedComponent
    },
    { path: '**', component: NotFoundComponent },


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
