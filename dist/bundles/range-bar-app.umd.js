(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('range-bar-app', ['exports', '@angular/core', '@angular/common', '@angular/forms'], factory) :
    (factory((global['range-bar-app'] = {}),global.ng.core,global.ng.common,global.ng.forms));
}(this, (function (exports,core,common,forms) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgRangeBarComponent = /** @class */ (function () {
        function NgRangeBarComponent() {
            this.range_slider_value = 0;
            this.minValue = 1;
            this.maxValue = 10;
            this.barColor = "";
            this.onSelect = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'ng-range-bar',
                        template: "<div class=\"range-slider wrapper\">\n  <input (input)=\"onInputChange($event)\" [(ngModel)]=\"range_slider_value\" range_value class=\"range-slider__range\" type=\"range\" [style.background]=\"barColor\" [min]=\"minValue\" [max]=\"maxValue\" >\n  <div class=\"tooltip\"  [style.left.%]=\"offsetLeft\">{{range_slider_value}}</div>\n  </div>",
                        styles: [".range-slider {\n    margin: 60px 0 0 0%;\n  }\n  \n  .range-slider {\n    width: 100%;\n  }\n  \n  .range-slider__range {\n    -webkit-appearance: none;\n    width: calc(100% - (73px));\n    height: 10px;\n    border-radius: 5px;\n    background: #d7dcdf;\n    outline: none;\n    padding: 0;\n    margin: 0;\n  }\n\n  .wrapper {\n    text-transform: uppercase;\n    color: #555;\n    font-family: \"Gill Sans\", Impact, sans-serif;\n    font-size: 20px;\n    \n    position: relative;\n    }\n  \n \n  .wrapper .tooltip {\n    background: #b5b5b592;\n    bottom: 100%;\n    color: rgb(7, 7, 7);\n    display: block;\n    margin-bottom: 15px;\n    opacity: 0;\n    border-radius: 0px;\n    padding: 10px;\n    pointer-events: none;\n    position: absolute;\n    -webkit-transform: translateY(10px);\n       -moz-transform: translateY(10px);\n        -ms-transform: translateY(10px);\n         -o-transform: translateY(10px);\n            transform: translateY(10px);\n    -webkit-transition: all .25s ease-out;\n       -moz-transition: all .25s ease-out;\n        -ms-transition: all .25s ease-out;\n         -o-transition: all .25s ease-out;\n            transition: all .25s ease-out;\n  \n  }\n  \n  /* This bridges the gap so you can mouse into the tooltip without it disappearing */\n  .wrapper .tooltip:before {\n    bottom: -20px;\n    content: \"\";\n    display: block;\n    height: 20px;\n    left: 0;\n    position: absolute;\n    width: 100%;\n  }  \n  \n  /* CSS Triangles - see Trevor's post */\n  .wrapper .tooltip:after {\n    border-left: solid transparent 5px;\n    border-right: solid transparent 5px;\n    border-top: solid #b5b5b592 5px;\n    bottom: -10px;\n    content: \" \";\n    height: 0;\n    left: 40%;\n    position: absolute;\n    width: 0;\n  }\n    \n  .wrapper:hover .tooltip {\n    opacity: 1;\n    pointer-events: auto;\n    -webkit-transform: translateY(0px);\n       -moz-transform: translateY(0px);\n        -ms-transform: translateY(0px);\n         -o-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n  \n\n  .range-slider__range::-webkit-slider-thumb {\n    -webkit-appearance: none;\n            appearance: none;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background: #2196f3;\n    cursor: pointer;\n    transition: background .15s ease-in-out;\n  }\n  .range-slider__range::-webkit-slider-thumb:hover {\n    background: #2196f3;\n  }\n  .range-slider__range:active::-webkit-slider-thumb {\n    background: #2196f3;\n  }\n  .range-slider__range::-moz-range-thumb {\n    width: 20px;\n    height: 20px;\n    border: 0;\n    border-radius: 50%;\n    background: #2196f3;\n    cursor: pointer;\n    transition: background .15s ease-in-out;\n  }\n  .range-slider__range::-moz-range-thumb:hover {\n    background: #2196f3;\n  }\n  .range-slider__range:active::-moz-range-thumb {\n    background: #2196f3;\n  }\n  .range-slider__range:focus::-webkit-slider-thumb {\n    box-shadow: 0 0 0 3px #fff, 0 0 0 6px #2196f3;\n  }\n  \n  .range-slider__value {\n    display: inline-block;\n    position: relative;\n    width: 60px;\n    color: #fff;\n    line-height: 20px;\n    text-align: center;\n    border-radius: 3px;\n    background: #2c3e50;\n    padding: 5px 10px;\n    margin-left: 8px;\n  }\n  .range-slider__value:after {\n    position: absolute;\n    top: 8px;\n    left: -7px;\n    width: 0;\n    height: 0;\n    border-top: 7px solid transparent;\n    border-right: 7px solid #2c3e50;\n    border-bottom: 7px solid transparent;\n    content: '';\n  }\n  \n  ::-moz-range-track {\n    background: #d7dcdf;\n    border: 0;\n  }\n  \n  input::-moz-focus-inner,\n  input::-moz-focus-outer {\n    border: 0;\n  }\n  .mat-label{\n    font-size: 20px;\n}\n"]
                    },] },
        ];
        /** @nocollapse */
        NgRangeBarComponent.ctorParameters = function () { return []; };
        NgRangeBarComponent.propDecorators = {
            "minValue": [{ type: core.Input },],
            "maxValue": [{ type: core.Input },],
            "barColor": [{ type: core.Input },],
            "onSelect": [{ type: core.Output },],
        };
        return NgRangeBarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgRangeBarModule = /** @class */ (function () {
        function NgRangeBarModule() {
        }
        NgRangeBarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule
                        ],
                        declarations: [
                            NgRangeBarComponent
                        ],
                        exports: [
                            NgRangeBarComponent
                        ]
                    },] },
        ];
        return NgRangeBarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.NgRangeBarModule = NgRangeBarModule;
    exports.ɵa = NgRangeBarComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UtYmFyLWFwcC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL3JhbmdlLWJhci1hcHAvc3JjL2FwcC9tb2R1bGVzL25nLXJhbmdlLWJhci9uZy1yYW5nZS1iYXIuY29tcG9uZW50LnRzIiwibmc6Ly9yYW5nZS1iYXItYXBwL3NyYy9hcHAvbW9kdWxlcy9uZy1yYW5nZS1iYXIvbmctcmFuZ2UtYmFyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLXJhbmdlLWJhcicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInJhbmdlLXNsaWRlciB3cmFwcGVyXCI+XG4gIDxpbnB1dCAoaW5wdXQpPVwib25JbnB1dENoYW5nZSgkZXZlbnQpXCIgWyhuZ01vZGVsKV09XCJyYW5nZV9zbGlkZXJfdmFsdWVcIiByYW5nZV92YWx1ZSBjbGFzcz1cInJhbmdlLXNsaWRlcl9fcmFuZ2VcIiB0eXBlPVwicmFuZ2VcIiBbc3R5bGUuYmFja2dyb3VuZF09XCJiYXJDb2xvclwiIFttaW5dPVwibWluVmFsdWVcIiBbbWF4XT1cIm1heFZhbHVlXCIgPlxuICA8ZGl2IGNsYXNzPVwidG9vbHRpcFwiICBbc3R5bGUubGVmdC4lXT1cIm9mZnNldExlZnRcIj57e3JhbmdlX3NsaWRlcl92YWx1ZX19PC9kaXY+XG4gIDwvZGl2PmAsXG5cbiAgc3R5bGVzOiBbYC5yYW5nZS1zbGlkZXIge1xuICAgIG1hcmdpbjogNjBweCAwIDAgMCU7XG4gIH1cbiAgXG4gIC5yYW5nZS1zbGlkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAucmFuZ2Utc2xpZGVyX19yYW5nZSB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAoNzNweCkpO1xuICAgIGhlaWdodDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogI2Q3ZGNkZjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLndyYXBwZXIge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgZm9udC1mYW1pbHk6IFwiR2lsbCBTYW5zXCIsIEltcGFjdCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgXG4gXG4gIC53cmFwcGVyIC50b29sdGlwIHtcbiAgICBiYWNrZ3JvdW5kOiAjYjViNWI1OTI7XG4gICAgYm90dG9tOiAxMDAlO1xuICAgIGNvbG9yOiByZ2IoNywgNywgNyk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2Utb3V0O1xuICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1vdXQ7XG4gICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLW91dDtcbiAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2Utb3V0O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1vdXQ7XG4gIFxuICB9XG4gIFxuICAvKiBUaGlzIGJyaWRnZXMgdGhlIGdhcCBzbyB5b3UgY2FuIG1vdXNlIGludG8gdGhlIHRvb2x0aXAgd2l0aG91dCBpdCBkaXNhcHBlYXJpbmcgKi9cbiAgLndyYXBwZXIgLnRvb2x0aXA6YmVmb3JlIHtcbiAgICBib3R0b206IC0yMHB4O1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9ICBcbiAgXG4gIC8qIENTUyBUcmlhbmdsZXMgLSBzZWUgVHJldm9yJ3MgcG9zdCAqL1xuICAud3JhcHBlciAudG9vbHRpcDphZnRlciB7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIHRyYW5zcGFyZW50IDVweDtcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIHRyYW5zcGFyZW50IDVweDtcbiAgICBib3JkZXItdG9wOiBzb2xpZCAjYjViNWI1OTIgNXB4O1xuICAgIGJvdHRvbTogLTEwcHg7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGxlZnQ6IDQwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgICBcbiAgLndyYXBwZXI6aG92ZXIgLnRvb2x0aXAge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG4gIFxuXG4gIC5yYW5nZS1zbGlkZXJfX3JhbmdlOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICMyMTk2ZjM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjE1cyBlYXNlLWluLW91dDtcbiAgfVxuICAucmFuZ2Utc2xpZGVyX19yYW5nZTo6LXdlYmtpdC1zbGlkZXItdGh1bWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMyMTk2ZjM7XG4gIH1cbiAgLnJhbmdlLXNsaWRlcl9fcmFuZ2U6YWN0aXZlOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogIzIxOTZmMztcbiAgfVxuICAucmFuZ2Utc2xpZGVyX19yYW5nZTo6LW1vei1yYW5nZS10aHVtYiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogIzIxOTZmMztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMTVzIGVhc2UtaW4tb3V0O1xuICB9XG4gIC5yYW5nZS1zbGlkZXJfX3JhbmdlOjotbW96LXJhbmdlLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjE5NmYzO1xuICB9XG4gIC5yYW5nZS1zbGlkZXJfX3JhbmdlOmFjdGl2ZTo6LW1vei1yYW5nZS10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogIzIxOTZmMztcbiAgfVxuICAucmFuZ2Utc2xpZGVyX19yYW5nZTpmb2N1czo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCAjZmZmLCAwIDAgMCA2cHggIzIxOTZmMztcbiAgfVxuICBcbiAgLnJhbmdlLXNsaWRlcl9fdmFsdWUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiAjMmMzZTUwO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIH1cbiAgLnJhbmdlLXNsaWRlcl9fdmFsdWU6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDhweDtcbiAgICBsZWZ0OiAtN3B4O1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItdG9wOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgIzJjM2U1MDtcbiAgICBib3JkZXItYm90dG9tOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29udGVudDogJyc7XG4gIH1cbiAgXG4gIDo6LW1vei1yYW5nZS10cmFjayB7XG4gICAgYmFja2dyb3VuZDogI2Q3ZGNkZjtcbiAgICBib3JkZXI6IDA7XG4gIH1cbiAgXG4gIGlucHV0OjotbW96LWZvY3VzLWlubmVyLFxuICBpbnB1dDo6LW1vei1mb2N1cy1vdXRlciB7XG4gICAgYm9yZGVyOiAwO1xuICB9XG4gIC5tYXQtbGFiZWx7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuYF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBOZ1JhbmdlQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcmFuZ2Vfc2xpZGVyX3ZhbHVlID0gMDtcbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgQElucHV0KCkgbWluVmFsdWUgPSAxO1xuICBASW5wdXQoKSBtYXhWYWx1ZSA9IDEwO1xuICBASW5wdXQoKSBiYXJDb2xvcjogU3RyaW5nID0gXCJcIjtcbiAgQE91dHB1dCgpIG9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgb2Zmc2V0TGVmdDtcbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgb25JbnB1dENoYW5nZSh2YWwpIHtcbiAgICB0aGlzLm9mZnNldExlZnQgPSBwYXJzZUludCgoKCh0aGlzLnJhbmdlX3NsaWRlcl92YWx1ZSAvIHRoaXMubWF4VmFsdWUpICogMTAwKSAtIDE1KSArIFwiXCIpO1xuICAgIHRoaXMub25TZWxlY3QuZW1pdCh0aGlzLnJhbmdlX3NsaWRlcl92YWx1ZSk7XG4gIH1cbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nUmFuZ2VCYXJDb21wb25lbnQgfSBmcm9tICcuL25nLXJhbmdlLWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbICAgIFxuICAgIE5nUmFuZ2VCYXJDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czpbXG4gICAgTmdSYW5nZUJhckNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nUmFuZ2VCYXJNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiQ29tcG9uZW50IiwiSW5wdXQiLCJPdXRwdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkZvcm1zTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUE2S0U7c0NBRHFCLENBQUM7NEJBRUYsQ0FBQzs0QkFDRCxFQUFFOzRCQUNNLEVBQUU7NEJBQ1UsSUFBSUEsaUJBQVksRUFBRTtTQUp6Qzs7OztRQU1qQixzQ0FBUTs7O1lBQVI7YUFDQzs7Ozs7UUFDRCwyQ0FBYTs7OztZQUFiLFVBQWMsR0FBRztnQkFDZixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxHQUFHLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUMxRixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUM3Qzs7b0JBdExGQyxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBRSxzVkFHSDt3QkFFUCxNQUFNLEVBQUUsQ0FBQyxpcUhBK0pWLENBQUM7cUJBQ0Q7Ozs7O2lDQUtFQyxVQUFLO2lDQUNMQSxVQUFLO2lDQUNMQSxVQUFLO2lDQUNMQyxXQUFNOztrQ0FqTFQ7Ozs7Ozs7QUNBQTs7OztvQkFLQ0MsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVk7NEJBQ1pDLGlCQUFXO3lCQUNaO3dCQUNELFlBQVksRUFBRTs0QkFDWixtQkFBbUI7eUJBQ3BCO3dCQUNELE9BQU8sRUFBQzs0QkFDTixtQkFBbUI7eUJBQ3BCO3FCQUNGOzsrQkFoQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==