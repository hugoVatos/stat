import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StatistiqueComponent } from './statistique/statistique.component';
import {HttpClientModule} from "@angular/common/http";
import { AffichageStatistiqueComponent } from './affichage-statistique/affichage-statistique.component';
import { FormStatistiqueComponent } from './form-statistique/form-statistique.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    StatistiqueComponent,
    AffichageStatistiqueComponent,


    NavBarComponent,
    FormStatistiqueComponent,
    NavBarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
