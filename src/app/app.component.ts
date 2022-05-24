import { Component } from '@angular/core';
import {Statistique} from "./models/statistique";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stat';
  statistiques: Statistique[] = [
    new Statistique("ronaldo", "12", "777 111 000"),
    new Statistique("messi", "11", "999 444 777")];

  constructor(){
    setTimeout(() => {
      this.statistiques.push(new Statistique("Neymar", "4", "000 111 000"));
    }, 4000);
  }



}

