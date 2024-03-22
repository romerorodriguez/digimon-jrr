import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DigimonesJrrComponent } from './digimones-jrr/digimones-jrr.component';
import { DigimonServices } from './digimones-jrr/digimones-jrr.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DigimonesJrrComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    DigimonServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
