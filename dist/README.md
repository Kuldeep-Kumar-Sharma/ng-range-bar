# ng-range-bar

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) 

## Features

ng-range-bar is simply a range bar/seekbar with material style it accepts:

- Minimum Value.
- Maximum Value.

Outputs:

- onSelect selected value of the user.


## Installation

> npm i range-bar-app

Add it to your Angular Module.

```
import { NgRangeBarModule } from 'ng-range-bar';

@NgModule({
  imports: [
    NgRangeBarModule
  ]
})
export class AppModule { }

```

## Usage

###### Template - somecomponent.component.html

```
<ng-range-bar  [maxValue]=1080
[minValue]=1
[barColor]="'red'"
(onSelect)="selectedObject($event)"></ng-range-bar>

```

###### somecomponent.component.ts

```
export class SomeComponent {

  selectedObject(obj){
    console.log(obj);
  }
}
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).