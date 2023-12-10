import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoyerModule } from './modules/foyer/foyer.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { UniversiteModule } from './modules/universite/universite.module';

import { BlocModule } from './modules/bloc/bloc.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './modules/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EtudiantModule } from './modules/etudiant/etudiant.module';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { UserModule } from './modules/user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './modules/navbar/navbar.component';

import { HomeComponent } from './Front/home/home.component';
import { ReservationComponent } from './Front/reservation/reservation.component';
import { ProfileComponent } from './Front/profile/profile.component';
import { ReservationChambreComponent } from './front/reservation-chambre/reservation-chambre.component';
import { CommonModule } from '@angular/common';
import { ListReservationComponent } from './Front/listReservation/listReservation.component';
import { FrontHeaderComponent } from './Front/FrontHeader/FrontHeader.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    HomeComponent,
    ReservationComponent,
    ProfileComponent,
    ReservationChambreComponent,
    ListReservationComponent,
    FrontHeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlocModule,
    BrowserAnimationsModule
    UserModule,
    EtudiantModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    UniversiteModule,
    FoyerModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
