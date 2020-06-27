import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    <input type="checkbox"/>
    <ng-content select="[title]"></ng-content>
    <ng-content></ng-content>
  `,
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
