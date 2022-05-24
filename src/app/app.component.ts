import { Component } from '@angular/core';
import {Statistique} from "./models/statistique";
import { StatistiqueService } from './statistique.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stat';



  constructor(
    public statistiqueService: StatistiqueService
  ){

    setTimeout(() => {
      this.statistiqueService.statistiques.push(new Statistique("Neymar", "4", "000 111 000"));
    }, 4000);
  }



}

