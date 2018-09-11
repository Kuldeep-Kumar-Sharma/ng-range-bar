/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var NgRangeBarComponent = /** @class */ (function () {
    function NgRangeBarComponent() {
        this.range_slider_value = 0;
        this.minValue = 1;
        this.maxValue = 10;
        this.barColor = "";
        this.onSelect = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NgRangeBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} val
     * @return {?}
     */
    NgRangeBarComponent.prototype.onInputChange = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.offsetLeft = parseInt((((this.range_slider_value / this.maxValue) * 100) - 15) + "");
        this.onSelect.emit(this.range_slider_value);
    };
    NgRangeBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-range-bar',
                    template: "<div class=\"range-slider wrapper\">\n  <input (input)=\"onInputChange($event)\" [(ngModel)]=\"range_slider_value\" range_value class=\"range-slider__range\" type=\"range\" [style.background]=\"barColor\" [min]=\"minValue\" [max]=\"maxValue\" >\n  <div class=\"tooltip\"  [style.left.%]=\"offsetLeft\">{{range_slider_value}}</div>\n  </div>",
                    styles: [".range-slider {\n    margin: 60px 0 0 0%;\n  }\n  \n  .range-slider {\n    width: 100%;\n  }\n  \n  .range-slider__range {\n    -webkit-appearance: none;\n    width: calc(100% - (73px));\n    height: 10px;\n    border-radius: 5px;\n    background: #d7dcdf;\n    outline: none;\n    padding: 0;\n    margin: 0;\n  }\n\n  .wrapper {\n    text-transform: uppercase;\n    color: #555;\n    font-family: \"Gill Sans\", Impact, sans-serif;\n    font-size: 20px;\n    \n    position: relative;\n    }\n  \n \n  .wrapper .tooltip {\n    background: #b5b5b592;\n    bottom: 100%;\n    color: rgb(7, 7, 7);\n    display: block;\n    margin-bottom: 15px;\n    opacity: 0;\n    border-radius: 0px;\n    padding: 10px;\n    pointer-events: none;\n    position: absolute;\n    -webkit-transform: translateY(10px);\n       -moz-transform: translateY(10px);\n        -ms-transform: translateY(10px);\n         -o-transform: translateY(10px);\n            transform: translateY(10px);\n    -webkit-transition: all .25s ease-out;\n       -moz-transition: all .25s ease-out;\n        -ms-transition: all .25s ease-out;\n         -o-transition: all .25s ease-out;\n            transition: all .25s ease-out;\n  \n  }\n  \n  /* This bridges the gap so you can mouse into the tooltip without it disappearing */\n  .wrapper .tooltip:before {\n    bottom: -20px;\n    content: \"\";\n    display: block;\n    height: 20px;\n    left: 0;\n    position: absolute;\n    width: 100%;\n  }  \n  \n  /* CSS Triangles - see Trevor's post */\n  .wrapper .tooltip:after {\n    border-left: solid transparent 5px;\n    border-right: solid transparent 5px;\n    border-top: solid #b5b5b592 5px;\n    bottom: -10px;\n    content: \" \";\n    height: 0;\n    left: 40%;\n    position: absolute;\n    width: 0;\n  }\n    \n  .wrapper:hover .tooltip {\n    opacity: 1;\n    pointer-events: auto;\n    -webkit-transform: translateY(0px);\n       -moz-transform: translateY(0px);\n        -ms-transform: translateY(0px);\n         -o-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n  \n\n  .range-slider__range::-webkit-slider-thumb {\n    -webkit-appearance: none;\n            appearance: none;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background: #2196f3;\n    cursor: pointer;\n    transition: background .15s ease-in-out;\n  }\n  .range-slider__range::-webkit-slider-thumb:hover {\n    background: #2196f3;\n  }\n  .range-slider__range:active::-webkit-slider-thumb {\n    background: #2196f3;\n  }\n  .range-slider__range::-moz-range-thumb {\n    width: 20px;\n    height: 20px;\n    border: 0;\n    border-radius: 50%;\n    background: #2196f3;\n    cursor: pointer;\n    transition: background .15s ease-in-out;\n  }\n  .range-slider__range::-moz-range-thumb:hover {\n    background: #2196f3;\n  }\n  .range-slider__range:active::-moz-range-thumb {\n    background: #2196f3;\n  }\n  .range-slider__range:focus::-webkit-slider-thumb {\n    box-shadow: 0 0 0 3px #fff, 0 0 0 6px #2196f3;\n  }\n  \n  .range-slider__value {\n    display: inline-block;\n    position: relative;\n    width: 60px;\n    color: #fff;\n    line-height: 20px;\n    text-align: center;\n    border-radius: 3px;\n    background: #2c3e50;\n    padding: 5px 10px;\n    margin-left: 8px;\n  }\n  .range-slider__value:after {\n    position: absolute;\n    top: 8px;\n    left: -7px;\n    width: 0;\n    height: 0;\n    border-top: 7px solid transparent;\n    border-right: 7px solid #2c3e50;\n    border-bottom: 7px solid transparent;\n    content: '';\n  }\n  \n  ::-moz-range-track {\n    background: #d7dcdf;\n    border: 0;\n  }\n  \n  input::-moz-focus-inner,\n  input::-moz-focus-outer {\n    border: 0;\n  }\n  .mat-label{\n    font-size: 20px;\n}\n"]
                },] },
    ];
    /** @nocollapse */
    NgRangeBarComponent.ctorParameters = function () { return []; };
    NgRangeBarComponent.propDecorators = {
        "minValue": [{ type: Input },],
        "maxValue": [{ type: Input },],
        "barColor": [{ type: Input },],
        "onSelect": [{ type: Output },],
    };
    return NgRangeBarComponent;
}());
export { NgRangeBarComponent };
function NgRangeBarComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NgRangeBarComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NgRangeBarComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    NgRangeBarComponent.propDecorators;
    /** @type {?} */
    NgRangeBarComponent.prototype.range_slider_value;
    /** @type {?} */
    NgRangeBarComponent.prototype.minValue;
    /** @type {?} */
    NgRangeBarComponent.prototype.maxValue;
    /** @type {?} */
    NgRangeBarComponent.prototype.barColor;
    /** @type {?} */
    NgRangeBarComponent.prototype.onSelect;
    /** @type {?} */
    NgRangeBarComponent.prototype.offsetLeft;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcmFuZ2UtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3JhbmdlLWJhci1hcHAvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbmctcmFuZ2UtYmFyL25nLXJhbmdlLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBNks3RTtrQ0FEcUIsQ0FBQzt3QkFFRixDQUFDO3dCQUNELEVBQUU7d0JBQ00sRUFBRTt3QkFDVSxJQUFJLFlBQVksRUFBRTtLQUp6Qzs7OztJQU1qQixzQ0FBUTs7O0lBQVI7S0FDQzs7Ozs7SUFDRCwyQ0FBYTs7OztJQUFiLFVBQWMsR0FBRztRQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7S0FDN0M7O2dCQXRMRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSxzVkFHSDtvQkFFUCxNQUFNLEVBQUUsQ0FBQyxpcUhBK0pWLENBQUM7aUJBQ0Q7Ozs7OzZCQUtFLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzZCQUNMLE1BQU07OzhCQWpMVDs7U0EyS2EsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1yYW5nZS1iYXInLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJyYW5nZS1zbGlkZXIgd3JhcHBlclwiPlxuICA8aW5wdXQgKGlucHV0KT1cIm9uSW5wdXRDaGFuZ2UoJGV2ZW50KVwiIFsobmdNb2RlbCldPVwicmFuZ2Vfc2xpZGVyX3ZhbHVlXCIgcmFuZ2VfdmFsdWUgY2xhc3M9XCJyYW5nZS1zbGlkZXJfX3JhbmdlXCIgdHlwZT1cInJhbmdlXCIgW3N0eWxlLmJhY2tncm91bmRdPVwiYmFyQ29sb3JcIiBbbWluXT1cIm1pblZhbHVlXCIgW21heF09XCJtYXhWYWx1ZVwiID5cbiAgPGRpdiBjbGFzcz1cInRvb2x0aXBcIiAgW3N0eWxlLmxlZnQuJV09XCJvZmZzZXRMZWZ0XCI+e3tyYW5nZV9zbGlkZXJfdmFsdWV9fTwvZGl2PlxuICA8L2Rpdj5gLFxuXG4gIHN0eWxlczogW2AucmFuZ2Utc2xpZGVyIHtcbiAgICBtYXJnaW46IDYwcHggMCAwIDAlO1xuICB9XG4gIFxuICAucmFuZ2Utc2xpZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLnJhbmdlLXNsaWRlcl9fcmFuZ2Uge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gKDczcHgpKTtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6ICNkN2RjZGY7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC53cmFwcGVyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIGZvbnQtZmFtaWx5OiBcIkdpbGwgU2Fuc1wiLCBJbXBhY3QsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gIFxuIFxuICAud3JhcHBlciAudG9vbHRpcCB7XG4gICAgYmFja2dyb3VuZDogI2I1YjViNTkyO1xuICAgIGJvdHRvbTogMTAwJTtcbiAgICBjb2xvcjogcmdiKDcsIDcsIDcpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLW91dDtcbiAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2Utb3V0O1xuICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1vdXQ7XG4gICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLW91dDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2Utb3V0O1xuICBcbiAgfVxuICBcbiAgLyogVGhpcyBicmlkZ2VzIHRoZSBnYXAgc28geW91IGNhbiBtb3VzZSBpbnRvIHRoZSB0b29sdGlwIHdpdGhvdXQgaXQgZGlzYXBwZWFyaW5nICovXG4gIC53cmFwcGVyIC50b29sdGlwOmJlZm9yZSB7XG4gICAgYm90dG9tOiAtMjBweDtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfSAgXG4gIFxuICAvKiBDU1MgVHJpYW5nbGVzIC0gc2VlIFRyZXZvcidzIHBvc3QgKi9cbiAgLndyYXBwZXIgLnRvb2x0aXA6YWZ0ZXIge1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCB0cmFuc3BhcmVudCA1cHg7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCB0cmFuc3BhcmVudCA1cHg7XG4gICAgYm9yZGVyLXRvcDogc29saWQgI2I1YjViNTkyIDVweDtcbiAgICBib3R0b206IC0xMHB4O1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGhlaWdodDogMDtcbiAgICBsZWZ0OiA0MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAwO1xuICB9XG4gICAgXG4gIC53cmFwcGVyOmhvdmVyIC50b29sdGlwIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgfVxuICBcblxuICAucmFuZ2Utc2xpZGVyX19yYW5nZTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjMjE5NmYzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4xNXMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgLnJhbmdlLXNsaWRlcl9fcmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjE5NmYzO1xuICB9XG4gIC5yYW5nZS1zbGlkZXJfX3JhbmdlOmFjdGl2ZTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICMyMTk2ZjM7XG4gIH1cbiAgLnJhbmdlLXNsaWRlcl9fcmFuZ2U6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICMyMTk2ZjM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjE1cyBlYXNlLWluLW91dDtcbiAgfVxuICAucmFuZ2Utc2xpZGVyX19yYW5nZTo6LW1vei1yYW5nZS10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzIxOTZmMztcbiAgfVxuICAucmFuZ2Utc2xpZGVyX19yYW5nZTphY3RpdmU6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICMyMTk2ZjM7XG4gIH1cbiAgLnJhbmdlLXNsaWRlcl9fcmFuZ2U6Zm9jdXM6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggI2ZmZiwgMCAwIDAgNnB4ICMyMTk2ZjM7XG4gIH1cbiAgXG4gIC5yYW5nZS1zbGlkZXJfX3ZhbHVlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYmFja2dyb3VuZDogIzJjM2U1MDtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICB9XG4gIC5yYW5nZS1zbGlkZXJfX3ZhbHVlOmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA4cHg7XG4gICAgbGVmdDogLTdweDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogN3B4IHNvbGlkICMyYzNlNTA7XG4gICAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbnRlbnQ6ICcnO1xuICB9XG4gIFxuICA6Oi1tb3otcmFuZ2UtdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICNkN2RjZGY7XG4gICAgYm9yZGVyOiAwO1xuICB9XG4gIFxuICBpbnB1dDo6LW1vei1mb2N1cy1pbm5lcixcbiAgaW5wdXQ6Oi1tb3otZm9jdXMtb3V0ZXIge1xuICAgIGJvcmRlcjogMDtcbiAgfVxuICAubWF0LWxhYmVse1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbmBdXG59KVxuXG5leHBvcnQgY2xhc3MgTmdSYW5nZUJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHJhbmdlX3NsaWRlcl92YWx1ZSA9IDA7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIEBJbnB1dCgpIG1pblZhbHVlID0gMTtcbiAgQElucHV0KCkgbWF4VmFsdWUgPSAxMDtcbiAgQElucHV0KCkgYmFyQ29sb3I6IFN0cmluZyA9IFwiXCI7XG4gIEBPdXRwdXQoKSBvblNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIG9mZnNldExlZnQ7XG4gIG5nT25Jbml0KCkge1xuICB9XG4gIG9uSW5wdXRDaGFuZ2UodmFsKSB7XG4gICAgdGhpcy5vZmZzZXRMZWZ0ID0gcGFyc2VJbnQoKCgodGhpcy5yYW5nZV9zbGlkZXJfdmFsdWUgLyB0aGlzLm1heFZhbHVlKSAqIDEwMCkgLSAxNSkgKyBcIlwiKTtcbiAgICB0aGlzLm9uU2VsZWN0LmVtaXQodGhpcy5yYW5nZV9zbGlkZXJfdmFsdWUpO1xuICB9XG59Il19