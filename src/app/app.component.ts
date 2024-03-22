import { Component, OnInit } from '@angular/core';
import { DigimonServices } from './digimones-jrr/digimones-jrr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  digimones: any;

  constructor(public digimon: DigimonServices) { }

  ngOnInit() {
    this.digimon.getDigimones().subscribe(
      (r) => {this.digimones = r; console.log(r)}, 
      (e) => { console.log(e) }
    );
  }
}
