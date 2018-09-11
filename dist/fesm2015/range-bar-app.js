import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgRangeBarComponent {
    constructor() {
        this.range_slider_value = 0;
        this.minValue = 1;
        this.maxValue = 10;
        this.barColor = "";
        this.onSelect = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} val
     * @return {?}
     */
    onInputChange(val) {
        this.offsetLeft = parseInt((((this.range_slider_value / this.maxValue) * 100) - 15) + "");
        this.onSelect.emit(this.range_slider_value);
    }
}
NgRangeBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-range-bar',
                template: `<div class="range-slider wrapper">
  <input (input)="onInputChange($event)" [(ngModel)]="range_slider_value" range_value class="range-slider__range" type="range" [style.background]="barColor" [min]="minValue" [max]="maxValue" >
  <div class="tooltip"  [style.left.%]="offsetLeft">{{range_slider_value}}</div>
  </div>`,
                styles: [`.range-slider {
    margin: 60px 0 0 0%;
  }
  
  .range-slider {
    width: 100%;
  }
  
  .range-slider__range {
    -webkit-appearance: none;
    width: calc(100% - (73px));
    height: 10px;
    border-radius: 5px;
    background: #d7dcdf;
    outline: none;
    padding: 0;
    margin: 0;
  }

  .wrapper {
    text-transform: uppercase;
    color: #555;
    font-family: "Gill Sans", Impact, sans-serif;
    font-size: 20px;
    
    position: relative;
    }
  
 
  .wrapper .tooltip {
    background: #b5b5b592;
    bottom: 100%;
    color: rgb(7, 7, 7);
    display: block;
    margin-bottom: 15px;
    opacity: 0;
    border-radius: 0px;
    padding: 10px;
    pointer-events: none;
    position: absolute;
    -webkit-transform: translateY(10px);
       -moz-transform: translateY(10px);
        -ms-transform: translateY(10px);
         -o-transform: translateY(10px);
            transform: translateY(10px);
    -webkit-transition: all .25s ease-out;
       -moz-transition: all .25s ease-out;
        -ms-transition: all .25s ease-out;
         -o-transition: all .25s ease-out;
            transition: all .25s ease-out;
  
  }
  
  /* This bridges the gap so you can mouse into the tooltip without it disappearing */
  .wrapper .tooltip:before {
    bottom: -20px;
    content: "";
    display: block;
    height: 20px;
    left: 0;
    position: absolute;
    width: 100%;
  }  
  
  /* CSS Triangles - see Trevor's post */
  .wrapper .tooltip:after {
    border-left: solid transparent 5px;
    border-right: solid transparent 5px;
    border-top: solid #b5b5b592 5px;
    bottom: -10px;
    content: " ";
    height: 0;
    left: 40%;
    position: absolute;
    width: 0;
  }
    
  .wrapper:hover .tooltip {
    opacity: 1;
    pointer-events: auto;
    -webkit-transform: translateY(0px);
       -moz-transform: translateY(0px);
        -ms-transform: translateY(0px);
         -o-transform: translateY(0px);
            transform: translateY(0px);
  }
  

  .range-slider__range::-webkit-slider-thumb {
    -webkit-appearance: none;
            appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #2196f3;
    cursor: pointer;
    transition: background .15s ease-in-out;
  }
  .range-slider__range::-webkit-slider-thumb:hover {
    background: #2196f3;
  }
  .range-slider__range:active::-webkit-slider-thumb {
    background: #2196f3;
  }
  .range-slider__range::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border: 0;
    border-radius: 50%;
    background: #2196f3;
    cursor: pointer;
    transition: background .15s ease-in-out;
  }
  .range-slider__range::-moz-range-thumb:hover {
    background: #2196f3;
  }
  .range-slider__range:active::-moz-range-thumb {
    background: #2196f3;
  }
  .range-slider__range:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 3px #fff, 0 0 0 6px #2196f3;
  }
  
  .range-slider__value {
    display: inline-block;
    position: relative;
    width: 60px;
    color: #fff;
    line-height: 20px;
    text-align: center;
    border-radius: 3px;
    background: #2c3e50;
    padding: 5px 10px;
    margin-left: 8px;
  }
  .range-slider__value:after {
    position: absolute;
    top: 8px;
    left: -7px;
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-right: 7px solid #2c3e50;
    border-bottom: 7px solid transparent;
    content: '';
  }
  
  ::-moz-range-track {
    background: #d7dcdf;
    border: 0;
  }
  
  input::-moz-focus-inner,
  input::-moz-focus-outer {
    border: 0;
  }
  .mat-label{
    font-size: 20px;
}
`]
            },] },
];
/** @nocollapse */
NgRangeBarComponent.ctorParameters = () => [];
NgRangeBarComponent.propDecorators = {
    "minValue": [{ type: Input },],
    "maxValue": [{ type: Input },],
    "barColor": [{ type: Input },],
    "onSelect": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgRangeBarModule {
}
NgRangeBarModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule
                ],
                declarations: [
                    NgRangeBarComponent
                ],
                exports: [
                    NgRangeBarComponent
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { NgRangeBarModule, NgRangeBarComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UtYmFyLWFwcC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vcmFuZ2UtYmFyLWFwcC9zcmMvYXBwL21vZHVsZXMvbmctcmFuZ2UtYmFyL25nLXJhbmdlLWJhci5jb21wb25lbnQudHMiLCJuZzovL3JhbmdlLWJhci1hcHAvc3JjL2FwcC9tb2R1bGVzL25nLXJhbmdlLWJhci9uZy1yYW5nZS1iYXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctcmFuZ2UtYmFyJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwicmFuZ2Utc2xpZGVyIHdyYXBwZXJcIj5cbiAgPGlucHV0IChpbnB1dCk9XCJvbklucHV0Q2hhbmdlKCRldmVudClcIiBbKG5nTW9kZWwpXT1cInJhbmdlX3NsaWRlcl92YWx1ZVwiIHJhbmdlX3ZhbHVlIGNsYXNzPVwicmFuZ2Utc2xpZGVyX19yYW5nZVwiIHR5cGU9XCJyYW5nZVwiIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImJhckNvbG9yXCIgW21pbl09XCJtaW5WYWx1ZVwiIFttYXhdPVwibWF4VmFsdWVcIiA+XG4gIDxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgIFtzdHlsZS5sZWZ0LiVdPVwib2Zmc2V0TGVmdFwiPnt7cmFuZ2Vfc2xpZGVyX3ZhbHVlfX08L2Rpdj5cbiAgPC9kaXY+YCxcblxuICBzdHlsZXM6IFtgLnJhbmdlLXNsaWRlciB7XG4gICAgbWFyZ2luOiA2MHB4IDAgMCAwJTtcbiAgfVxuICBcbiAgLnJhbmdlLXNsaWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5yYW5nZS1zbGlkZXJfX3JhbmdlIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtICg3M3B4KSk7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZDdkY2RmO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAud3JhcHBlciB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzU1NTtcbiAgICBmb250LWZhbWlseTogXCJHaWxsIFNhbnNcIiwgSW1wYWN0LCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICBcbiBcbiAgLndyYXBwZXIgLnRvb2x0aXAge1xuICAgIGJhY2tncm91bmQ6ICNiNWI1YjU5MjtcbiAgICBib3R0b206IDEwMCU7XG4gICAgY29sb3I6IHJnYig3LCA3LCA3KTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1vdXQ7XG4gICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLW91dDtcbiAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2Utb3V0O1xuICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1vdXQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLW91dDtcbiAgXG4gIH1cbiAgXG4gIC8qIFRoaXMgYnJpZGdlcyB0aGUgZ2FwIHNvIHlvdSBjYW4gbW91c2UgaW50byB0aGUgdG9vbHRpcCB3aXRob3V0IGl0IGRpc2FwcGVhcmluZyAqL1xuICAud3JhcHBlciAudG9vbHRpcDpiZWZvcmUge1xuICAgIGJvdHRvbTogLTIwcHg7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH0gIFxuICBcbiAgLyogQ1NTIFRyaWFuZ2xlcyAtIHNlZSBUcmV2b3IncyBwb3N0ICovXG4gIC53cmFwcGVyIC50b29sdGlwOmFmdGVyIHtcbiAgICBib3JkZXItbGVmdDogc29saWQgdHJhbnNwYXJlbnQgNXB4O1xuICAgIGJvcmRlci1yaWdodDogc29saWQgdHJhbnNwYXJlbnQgNXB4O1xuICAgIGJvcmRlci10b3A6IHNvbGlkICNiNWI1YjU5MiA1cHg7XG4gICAgYm90dG9tOiAtMTBweDtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBoZWlnaHQ6IDA7XG4gICAgbGVmdDogNDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMDtcbiAgfVxuICAgIFxuICAud3JhcHBlcjpob3ZlciAudG9vbHRpcCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbiAgXG5cbiAgLnJhbmdlLXNsaWRlcl9fcmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogIzIxOTZmMztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMTVzIGVhc2UtaW4tb3V0O1xuICB9XG4gIC5yYW5nZS1zbGlkZXJfX3JhbmdlOjotd2Via2l0LXNsaWRlci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzIxOTZmMztcbiAgfVxuICAucmFuZ2Utc2xpZGVyX19yYW5nZTphY3RpdmU6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjE5NmYzO1xuICB9XG4gIC5yYW5nZS1zbGlkZXJfX3JhbmdlOjotbW96LXJhbmdlLXRodW1iIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjMjE5NmYzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4xNXMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgLnJhbmdlLXNsaWRlcl9fcmFuZ2U6Oi1tb3otcmFuZ2UtdGh1bWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMyMTk2ZjM7XG4gIH1cbiAgLnJhbmdlLXNsaWRlcl9fcmFuZ2U6YWN0aXZlOjotbW96LXJhbmdlLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjE5NmYzO1xuICB9XG4gIC5yYW5nZS1zbGlkZXJfX3JhbmdlOmZvY3VzOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4ICNmZmYsIDAgMCAwIDZweCAjMjE5NmYzO1xuICB9XG4gIFxuICAucmFuZ2Utc2xpZGVyX192YWx1ZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJhY2tncm91bmQ6ICMyYzNlNTA7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgfVxuICAucmFuZ2Utc2xpZGVyX192YWx1ZTphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOHB4O1xuICAgIGxlZnQ6IC03cHg7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci10b3A6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCAjMmMzZTUwO1xuICAgIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBjb250ZW50OiAnJztcbiAgfVxuICBcbiAgOjotbW96LXJhbmdlLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAjZDdkY2RmO1xuICAgIGJvcmRlcjogMDtcbiAgfVxuICBcbiAgaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIsXG4gIGlucHV0OjotbW96LWZvY3VzLW91dGVyIHtcbiAgICBib3JkZXI6IDA7XG4gIH1cbiAgLm1hdC1sYWJlbHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5gXVxufSlcblxuZXhwb3J0IGNsYXNzIE5nUmFuZ2VCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICByYW5nZV9zbGlkZXJfdmFsdWUgPSAwO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuICBASW5wdXQoKSBtaW5WYWx1ZSA9IDE7XG4gIEBJbnB1dCgpIG1heFZhbHVlID0gMTA7XG4gIEBJbnB1dCgpIGJhckNvbG9yOiBTdHJpbmcgPSBcIlwiO1xuICBAT3V0cHV0KCkgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBvZmZzZXRMZWZ0O1xuICBuZ09uSW5pdCgpIHtcbiAgfVxuICBvbklucHV0Q2hhbmdlKHZhbCkge1xuICAgIHRoaXMub2Zmc2V0TGVmdCA9IHBhcnNlSW50KCgoKHRoaXMucmFuZ2Vfc2xpZGVyX3ZhbHVlIC8gdGhpcy5tYXhWYWx1ZSkgKiAxMDApIC0gMTUpICsgXCJcIik7XG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KHRoaXMucmFuZ2Vfc2xpZGVyX3ZhbHVlKTtcbiAgfVxufSIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdSYW5nZUJhckNvbXBvbmVudCB9IGZyb20gJy4vbmctcmFuZ2UtYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsgICAgXG4gICAgTmdSYW5nZUJhckNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOltcbiAgICBOZ1JhbmdlQmFyQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmdSYW5nZUJhck1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0lBNktFO2tDQURxQixDQUFDO3dCQUVGLENBQUM7d0JBQ0QsRUFBRTt3QkFDTSxFQUFFO3dCQUNVLElBQUksWUFBWSxFQUFFO0tBSnpDOzs7O0lBTWpCLFFBQVE7S0FDUDs7Ozs7SUFDRCxhQUFhLENBQUMsR0FBRztRQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLEdBQUcsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7S0FDN0M7OztZQXRMRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7O1NBR0g7Z0JBRVAsTUFBTSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQStKVixDQUFDO2FBQ0Q7Ozs7O3lCQUtFLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLE1BQU07Ozs7Ozs7QUNqTFQ7OztZQUtDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO2lCQUNaO2dCQUNELFlBQVksRUFBRTtvQkFDWixtQkFBbUI7aUJBQ3BCO2dCQUNELE9BQU8sRUFBQztvQkFDTixtQkFBbUI7aUJBQ3BCO2FBQ0Y7Ozs7Ozs7Ozs7Ozs7OzsifQ==