import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCssHighlight]'
})
export class CssHighlightDirective {
  @Input('appCssHighlight') highlightColor: string
  private color = ''
  constructor(private el: ElementRef) {
    // 指令创建期间@input传入的属性无法拿到
    this.color = el.nativeElement.style.color
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = this.highlightColor
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = this.color
  }

}
