import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EtudiantModule } from './modules/etudiant/etudiant.module';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { UserModule } from './modules/user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
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
    UserModule,
    EtudiantModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
