import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') color: string;
  // tslint:disable-next-line:no-input-rename
  @Input('hl-border') border: boolean;
  originalColor: string;

  constructor(private element: ElementRef<HTMLElement>, private renderer: Renderer2) { }

  @HostListener('mouseover')
  addHighlight(): void {
    const color = this.color || 'red';
    this.originalColor = this.element.nativeElement.style.backgroundColor;

    this.renderer.setStyle(this.element.nativeElement, 'background-color', color);

    if (this.border) {
      this.renderer.addClass(this.element.nativeElement, 'border');
      this.renderer.addClass(this.element.nativeElement, 'border-dark');
    }
  }

  @HostListener('mouseleave')
  removeHighlight(): void {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', this.originalColor);
    this.renderer.removeClass(this.element.nativeElement, 'border');
    this.renderer.removeClass(this.element.nativeElement, 'border-dark');
  }
}
