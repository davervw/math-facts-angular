import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  constructor() { }

  a: number = Math.floor(Math.random()*13);
  b: number = Math.floor(Math.random()*13);
  answer = "";
  result = "";

  @ViewChild('display', { read: ElementRef })
  display!: ElementRef;

  onPress(n: number) {
    let elm: HTMLInputElement = this.display.nativeElement;
    //console.log(n);    
    if (n == -2) {
      this.result = (this.a * this.b).toString() === elm.value
        ? "correct"
        : "try again";
      if (this.result === "correct") {
        this.a = Math.floor(Math.random()*13);
        this.b = Math.floor(Math.random()*13);
        elm.value = "";
      }
    } else {
      this.result = "";
      if (n >= 0)
        elm.value += n.toString();
      else if (n == -1 && elm.value.length > 0)
        elm.value = elm.value.slice(0, elm.value.length - 1);
    }
  }
}
