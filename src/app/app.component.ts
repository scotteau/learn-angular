import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {DataService} from './services/data.service';

export interface Item {
  name: string,
  description: string,
  isDone: boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <app-title (toggleColor)="toggleColor($event)">
      <h1 title #title>Learn Angular</h1>
      <p description #description>This is a sample project to learn how angular project is structured.</p>
    </app-title>

    <ul class="list">
      <li class="list-item" *ngFor="let item of items; index as i" (click)="handleClick($event, item)">
        <app-item [item]="item" [index]="i"></app-item>
      </li>
    </ul>
  `
})
export class AppComponent implements OnInit {

  @ViewChild('title') title: ElementRef;

  items: Item[];

  constructor(private renderer: Renderer2, private data: DataService) {
  }

  ngOnInit(): void {
    this.items = this.data.items;
  }


  handleClick(event: MouseEvent, item: Item) {
    item.isDone = !item.isDone;
  }

  toggleColor(payload: any) {
    this.renderer.setStyle(this.title.nativeElement, 'color', payload.color);
  }
}
