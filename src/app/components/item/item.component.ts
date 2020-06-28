import {Component, Input} from '@angular/core';
import {Item} from '../../app.component';

@Component({
  selector: 'app-item',
  styleUrls: ['./item.component.scss'],
  template: `
    <div class="left">
      <input class="checkbox" type="checkbox" [checked]="item.isDone"/>
      <span title>

        <span class="content" [ngClass]="{done: item.isDone}">{{index + 1}}.{{item.name}}</span>
        <ng-container *ngTemplateOutlet="showEmoji; context: {emoji: item.isDone ? '😝' : '🙁' }"></ng-container>

      </span>
    </div>
    <span description [ngClass]="{done: item.isDone}">{{item.description | titlecase}}</span>

    <ng-template #showEmoji let-emoji="emoji">
      <span class="emoji" [ngStyle]="renderStyle()">{{emoji}}</span>
    </ng-template>
  `
})
export class ItemComponent {
  @Input() item: Item;
  @Input() index: number;

  constructor() {
  }

  renderStyle() {
    return {
      textDecoration: 'none',
      opacity: 0.8
    };
  }
}
