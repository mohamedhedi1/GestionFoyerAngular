import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { LoginComponent } from './modules/login/login.component';
import { FormsModule } from '@angular/forms';
import { EtudiantModule } from './modules/etudiant/etudiant.module';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { UserModule } from './modules/user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    LoginComponent,
    NotFoundComponent,

    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    EtudiantModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
