import { Injectable } from '@angular/core';
import { Statistique } from './models/statistique';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

  statistiques: Statistique[] = [
    new Statistique("ronaldo", "12", "777 111 000"),
    new Statistique("messi", "11", "999 444 777")];

  constructor() { }
}
