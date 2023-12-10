import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoyerModule } from './modules/foyer/foyer.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { UniversiteModule } from './modules/universite/universite.module';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FoyerModule,
    UniversiteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
