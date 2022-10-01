import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { GameComponent } from './game/game.component';
import { KeypadComponent } from './keypad/keypad.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    GameComponent,
    KeypadComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
