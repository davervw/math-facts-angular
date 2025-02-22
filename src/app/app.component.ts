import { Component } from '@angular/core';
import { GameComponent } from './game/game.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  title = 'math-facts';
}
