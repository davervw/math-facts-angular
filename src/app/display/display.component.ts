import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.scss'],
    standalone: false
})
export class DisplayComponent {

  @Input()
  public value: string = "";
}
