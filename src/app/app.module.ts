import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent, TaskItemDirective} from './app.component';
import {HoverDirective, TitleComponent} from './components/title/title.component';
import {ItemComponent} from './components/item/item.component';
import {DoubleDirective} from './directives/double.directive';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ItemComponent,
    HoverDirective,
    TaskItemDirective,
    DoubleDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
