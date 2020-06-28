import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent, TaskItemDirective} from './app.component';
import {HoverDirective, TitleComponent} from './components/title/title.component';
import {ItemComponent} from './components/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ItemComponent,
    HoverDirective,
    TaskItemDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
