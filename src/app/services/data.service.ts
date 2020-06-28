import {Injectable} from '@angular/core';
import {Item} from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  items: Item[] = [
    {name: '@input', description: 'input data into component', isDone: true},
    {name: '@output', description: 'using event emitter', isDone: true},
    {name: 'ng-content', description: 'Learn how to project content using ng-content', isDone: true},
    {name: `inline template & style`, description: 'Playing with inline template & style', isDone: true},
    {name: 'ng-template', description: 'Learn how to use ng-template in ngIf & template-outlet', isDone: true},
    {name: 'ngIf', description: 'Experimenting with conditional rendering in angular', isDone: true},
    {name: 'ngSwitch', description: 'Playing with ngSwitch', isDone: false},
    {name: 'ngStyle', description: 'Using ngStyle', isDone: true},
    {name: 'ngClass', description: 'Playing with ngClass', isDone: true},
    {name: 'ngFor', description: 'Rendering list using ngFor', isDone: true},
    {name: 'Pipes', description: 'Playing with angular pipes', isDone: true},
    {name: '@ViewChild', description: 'Local query using viewChild', isDone: true},
    {name: '@ContentChild', description: 'Using query using ContentChild', isDone: true},
    {name: 'renderer', description: 'Experimenting with renderer', isDone: true},
    {name: '@Directive - Attributes', description: 'Playing with attributes directives', isDone: false},
    {name: '@Directive - Structure', description: 'Playing with structure directives', isDone: false},
    {name: '@HostBinding', description: 'Learn how to use HostBinding', isDone: false},
    {name: '@HostListener', description: 'Learn how to use HostListener', isDone: false},
    {name: 'Service', description: 'Injecting service to component', isDone: true}
  ];

  constructor() {
  }
}
