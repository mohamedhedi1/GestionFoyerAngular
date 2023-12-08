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
import { HomeComponent } from './modules/home/home.component';
import { ResetpasswordComponent } from './modules/resetpassword/resetpassword.component';
import { NewpasswordComponent } from './modules/newpassword/newpassword.component';
import { EmailsendedComponent } from './modules/emailsended/emailsended.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    HomeComponent,
    ResetpasswordComponent,
    NewpasswordComponent,
    EmailsendedComponent,

    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    EtudiantModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
