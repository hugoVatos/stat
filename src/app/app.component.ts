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
      this.statistiqueService.statistiques.push(new Statistique("2", "Etats-Unis", "334 805 000", "1650031054073"));
    }, 4000);
  }

  removeStatistique(statistique: Statistique){
    let index = this.statistiqueService.statistiques.indexOf(statistique);
    this.statistiqueService.statistiques.splice(index, 1);
  }




}

