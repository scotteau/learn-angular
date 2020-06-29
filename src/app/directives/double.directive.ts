import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class DoubleDirective {

  @Input('appTimes') set render(number: number) {
    this.viewContainer.clear();
    for (let i = 0; i < number; i++) {
      this.viewContainer.createEmbeddedView(this.template, {index: i});
    }
  }

  constructor(private viewContainer: ViewContainerRef, private template: TemplateRef<any>) {
  }
}
