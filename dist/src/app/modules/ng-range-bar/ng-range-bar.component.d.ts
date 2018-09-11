import { OnInit, EventEmitter } from '@angular/core';
export declare class NgRangeBarComponent implements OnInit {
    range_slider_value: number;
    constructor();
    minValue: number;
    maxValue: number;
    barColor: String;
    onSelect: EventEmitter<any>;
    offsetLeft: any;
    ngOnInit(): void;
    onInputChange(val: any): void;
}
