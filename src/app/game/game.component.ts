import { Component, ViewChild, ElementRef } from '@angular/core';
import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  constructor() { }

  a: number = Math.floor(Math.random()*13);
  b: number = Math.floor(Math.random()*13);
  result = "";
  answer = "";

  onPress(n: number) {
    //console.log(n);    
    if (n == -2) {
      this.result = (this.a * this.b).toString() === this.answer
        ? "correct"
        : "try again";
      if (this.result === "correct") {
        this.a = Math.floor(Math.random()*13);
        this.b = Math.floor(Math.random()*13);
        this.answer = "";
      }
    } else {
      if (this.result != "") {
        this.result = "";
        this.answer = "";
      }
      if (n >= 0)
        this.answer += n.toString();
      else if (n == -1 && this.answer.length > 0)
        this.answer = this.answer.slice(0, this.answer.length-1);
    }
  }
}
