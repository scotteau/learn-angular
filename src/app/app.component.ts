import {Component, Directive, ElementRef} from '@angular/core';

interface item {
  name: string,
  description: string,
  isDone: boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <app-title>
      <h1 title>Learn Angular</h1>
      <p description>This is a sample project to learn how angular project is structured.</p>
    </app-title>

    <ul class="list">
      <li class="list-item" *ngFor="let item of items; index as i">
        <app-item [item]="item" [index]="i"></app-item>
      </li>
    </ul>
  `
})
export class AppComponent {
  title = 'learn-angular';

  items: item[] = [
    {name: '@input', description: 'input data into component', isDone: true},
    {name: '@output', description: 'using event emitter', isDone: false},
    {name: 'ng-content', description: 'Learn how to project content using ng-content', isDone: true},
    {name: `inline template & style`, description: 'Playing with inline template & style', isDone: true},
    {name: 'ng-template', description: 'Learn how to use ng-template in ngIf & template-outlet', isDone: true},
    {name: 'ngIf', description: 'Experimenting with conditional rendering in angular', isDone: true},
    {name: 'ngSwitch', description: 'Playing with ngSwitch', isDone: false},
    {name: 'ngStyle', description: 'Using ngStyle', isDone: false},
    {name: 'ngClass', description: 'Playing with ngClass', isDone: true},
    {name: 'ngFor', description: 'Rendering list using ngFor', isDone: true},
    {name: 'Pipes', description: 'Playing with angular pipes', isDone: false},
    {name: '@ViewChild', description: 'Local query using viewChild', isDone: false},
    {name: '@ContentChild', description: 'Using query using ContentChild', isDone: false},
    {name: 'renderer', description: 'Experimenting with renderer', isDone: false},
    {name: '@Directive - Attributes', description: 'Playing with attributes directives', isDone: false},
    {name: '@Directive - Structure', description: 'Playing witht structure directives', isDone: false},
    {name: '@HostBinding', description: 'Learn how to use HostBinding', isDone: false},
    {name: '@HostListener', description: 'Learn how to use HostListener', isDone: false},
    {name: 'Service', description: 'Injecting service to component', isDone: false}
  ];
}
