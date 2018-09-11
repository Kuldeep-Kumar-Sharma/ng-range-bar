import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
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
})

export class NgRangeBarComponent implements OnInit {
  range_slider_value = 0;
  constructor() { }
  @Input() minValue = 1;
  @Input() maxValue = 10;
  @Input() barColor: String = "";
  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  offsetLeft;
  ngOnInit() {
  }
  onInputChange(val) {
    this.offsetLeft = parseInt((((this.range_slider_value / this.maxValue) * 100) - 15) + "");
    this.onSelect.emit(this.range_slider_value);
  }
}