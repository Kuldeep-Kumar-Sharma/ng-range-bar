import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgRangeBarComponent } from './ng-range-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [    
    NgRangeBarComponent
  ],
  exports:[
    NgRangeBarComponent
  ]
})
export class NgRangeBarModule { }
