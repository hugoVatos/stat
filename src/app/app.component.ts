import { Component } from '@angular/core';
import {Statistique} from "./models/statistique";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stat';
  statistique1: Statistique = new Statistique( "ronaldo", "12", "448 471 000");
  statistique2: Statistique = new Statistique( "messi", "11", "406 632 000");

}

