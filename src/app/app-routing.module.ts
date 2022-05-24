import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffichageStatistiqueComponent } from './affichage-statistique/affichage-statistique.component';

import {FormStatistiqueComponent} from "./form-statistique/form-statistique.component";


const routes: Routes = [
  {path: "liste", component: AffichageStatistiqueComponent},
  {path: "creer", component: FormStatistiqueComponent},
  {path: "**", component: AffichageStatistiqueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
