import {Component, Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {DataService} from './services/data.service';
import {Observable} from 'rxjs';

export interface Item {
  name: string,
  description: string,
  isDone: boolean
}

@Directive({
  selector: 'li[TaskItem]'
})

export class TaskItemDirective {
  @Input('TaskItem') shouldShow = false;

  @HostBinding('class.isDone')
  get determineClass() {
    return this.shouldShow;
  }

  @HostBinding('className')
  get taskItem() {
    return 'taskItem';
  }

  @HostListener('click', ['$event'])
  onClick(event) {
    console.log(event);
  }

  constructor() {
  }
}

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <app-title (toggleColor)="toggleColor($event)">
      <h1 title #title>Learn Angular</h1>
      <p description #description *appTimes="2; let i = index">{{i + 1}}. This is a sample project to learn how angular project is
        structured.</p>
    </app-title>

    <ul class="list" *ngIf="items$">
      <li class="list-item"
          *ngFor="let item of items$ | async; index as i"
          (click)="handleClick($event, item)"
          [TaskItem]="item.isDone"
      >
        <app-item [item]="item" [index]="i"></app-item>
      </li>
    </ul>
  `
})

export class AppComponent implements OnInit {

  @ViewChild('title') title: ElementRef;

  items$: Observable<Item[]>;


  constructor(private renderer: Renderer2, private data: DataService) {
  }

  ngOnInit(): void {
    this.items$ = this.data.items$;
  }


  handleClick(event: MouseEvent, item: Item) {
    item.isDone = !item.isDone;
  }

  toggleColor(payload: any) {
    this.renderer.setStyle(this.title.nativeElement, 'color', payload.color);
  }
}
