import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-item',
  styleUrls: ['./item.component.scss'],
  template: `
    <div class="left">
      <input class="checkbox" type="checkbox" [checked]="item.isDone"/>
      <span title [ngClass]="{done: item.isDone}">
        {{index + 1}}.{{item.name}}
        <ng-container *ngTemplateOutlet="showEmoji; context: {emoji: item.isDone ? '😝' : '🙁' }"></ng-container>
      </span>
    </div>
    <span description [ngClass]="{done: item.isDone}">{{item.description | titlecase}}</span>

    <ng-template #showEmoji let-emoji="emoji">
      <span class="emoji">{{emoji}}</span>
    </ng-template>
  `
})
export class ItemComponent {
  @Input() item;
  @Input() index;

  constructor() {
  }

}
