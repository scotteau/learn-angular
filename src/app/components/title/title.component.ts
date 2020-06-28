import {AfterContentInit, Component, ContentChild, ElementRef, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <ng-content select="[title]"></ng-content>
    <ng-content select="[description]"></ng-content>
    <button (click)="handleClick($event)">toggle color</button>
  `,
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }

    button {
      padding: 0.3rem 0.5rem;
      width: 6rem;
      color: #fff;
      background: #1976d2;
      border: none;
      border-radius: 0.25rem;
    }
  `]
})
export class TitleComponent implements OnInit, AfterContentInit {

  @ContentChild('title') title;
  @ContentChild('description') description: ElementRef;

  @Output()
  toggleColor = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.title);
    console.log(this.description);
  }

  handleClick(event: MouseEvent) {
    this.toggleColor.emit({
      message: 'hello from title component',
      event: event,
      color: 'red'
    });
  }
}
