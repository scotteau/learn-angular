import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item',
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


  `,
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item;
  @Input() index;

  constructor() {
  }

  ngOnInit(): void {
  }

}
