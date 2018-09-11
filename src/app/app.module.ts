import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgRangeBarModule } from './modules/ng-range-bar/ng-range-bar.module';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgRangeBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
