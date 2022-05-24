import { Component, OnInit } from '@angular/core';
import { Statistique } from '../models/statistique';
import { StatistiqueService } from '../statistique.service';

@Component({
  selector: 'app-affichage-statistique',
  templateUrl: './affichage-statistique.component.html',
  styleUrls: ['./affichage-statistique.component.css']
})
export class AffichageStatistiqueComponent implements OnInit {

  constructor(
    public statistiqueService: StatistiqueService
  ) { }

  removeStatistique(statistique: Statistique){
    let index = this.statistiqueService.statistiques.indexOf(statistique);
    this.statistiqueService.statistiques.splice(index, 1);
  }

  ngOnInit(): void {
  }

}

