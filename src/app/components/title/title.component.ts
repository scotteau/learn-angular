import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <ng-content select="[title]"></ng-content>
    <ng-content select="[description]"></ng-content>
  `,
  styles: [`
    :host {
      display: flex;
      border: 1px solid red;
      justify-content: center;
      flex-direction: column;
    }
  `]
})
export class TitleComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
