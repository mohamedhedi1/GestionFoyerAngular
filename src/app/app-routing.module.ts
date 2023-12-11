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
import { SideBarComponent } from './side-bar/side-bar.component';
import { LoginComponent } from './modules/login/login.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { HomeComponent } from './Front/home/home.component';
import { AuthGuard } from './core/guards/authentification.guard';
import { RoleGuard } from './core/guards/role-guard.guard';
import { StudentGuard } from './core/guards/student-guard';
import { ReservationComponent } from './Front/reservation/reservation.component';
import { ProfileComponent } from './Front/profile/profile.component';

import { ListReservationComponent } from './Front/listReservation/listReservation.component';
import { ReservationChambreComponent } from './front/reservation-chambre/reservation-chambre.component';


const routes: Routes = [
  { path: '', component: LoginComponent },

  { path: 'login', component: LoginComponent },
  {
    path: 'users', loadChildren: () =>
      import('./modules/user/user.module').then(m => m.UserModule), canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: "home", component: HomeComponent, canActivate: [AuthGuard, StudentGuard], children: [{ path: "reservation", component: ReservationComponent }]
  },
  {
    path: 'mainBloc', loadChildren: () =>
      import('./modules/bloc/bloc.module').then(m => m.BlocModule)
  },
  {
    path: 'etudiants', loadChildren: () =>
      import('./modules/etudiant/etudiant.module').then(m => m.EtudiantModule), canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: 'mainUniversite', loadChildren: () =>
      import('./modules/universite/universite.module').then(m => m.UniversiteModule)
  },
  {
    path: 'mainFoyer', loadChildren: () =>
      import('./modules/foyer/foyer.module').then(m => m.FoyerModule)
  },

  {
    path: 'chambres', loadChildren: () =>
      import('./modules/chambre/chambre.module').then(m => m.ChambreModule)
  }

  {
    path: "profile", component: ProfileComponent, canActivate: [AuthGuard, StudentGuard]
  },
  {
    path: "listReservation", component: ListReservationComponent, canActivate: [AuthGuard, StudentGuard]
  },
  {
    path: 'resetpassword',
    component: ResetpasswordComponent
  },
  {
    path: 'newpassword',
    component: NewpasswordComponent
  },
  {
    path: 'emailsended', component: EmailsendedComponent
  },
  {
    path: "reserver/:id", component: ReservationChambreComponent, canActivate: [AuthGuard, StudentGuard]
  },
  { path: '**', component: NotFoundComponent },



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
