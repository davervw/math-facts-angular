import { Component, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-keypad',
    templateUrl: './keypad.component.html',
    styleUrls: ['./keypad.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class KeypadComponent {

  @Output() press: EventEmitter<number> = new EventEmitter();

  onClick(n: number) {
    this.press.emit(n);
  }

}
