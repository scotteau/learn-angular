import {Component, OnInit, Output, EventEmitter, Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[hover]',
})

export class HoverDirective {
  @HostBinding('style')
  get renderStyle() {
    return {background: 'crimson'};
  }
}

@Component({
  selector: 'app-title',
  template: `
    <ng-content select="[title]"></ng-content>
    <ng-content select="[description]"></ng-content>
    <button (click)="handleClick($event)" hover>toggle color</button>

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
export class TitleComponent implements OnInit {


  @Output()
  toggleColor = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }


  handleClick(event: MouseEvent) {
    this.toggleColor.emit({
      message: 'hello from title component',
      event: event,
      color: 'red'
    });
  }
}
