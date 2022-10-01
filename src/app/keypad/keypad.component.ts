import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.scss']
})
export class KeypadComponent {

  @Output() press: EventEmitter<number> = new EventEmitter();

  onClick(n: number) {
    this.press.emit(n);
  }

}
