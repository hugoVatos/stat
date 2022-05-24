import { Injectable } from '@angular/core';
import { Statistique } from './models/statistique';
import { HttpClient } from '@angular/common/http';
import { StatistiqueBack } from './models/apiType';


@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

  statistiques: Statistique[] = [];

  constructor(
    private http: HttpClient
  ) {
    this.http.get<StatistiqueBack[]>("https://stats.naminilamy.fr").subscribe(
      res => {
        for (const statistique of res) {
          this.statistiques.push(new Statistique(statistique.id, statistique.title, statistique.value, statistique.updatedAt));
        }
      });
  }
}


