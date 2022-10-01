import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { KeypadComponent } from './keypad/keypad.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    KeypadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [GameComponent]
})
export class AppModule { }
