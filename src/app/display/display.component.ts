import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DisplayComponent {

  @Input()
  public value: string = "";
}
