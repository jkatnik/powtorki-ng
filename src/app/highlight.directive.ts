import { Directive, Renderer2, ElementRef, HostListener, Input } from '@angular/core';
import { DomAdapter } from '@angular/platform-browser/src/dom/dom_adapter';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private element: ElementRef<HTMLElement>, private renderer: Renderer2) { }

  @Input('appHighlight')
  color: string;

  originalColor: string;

  // tslint:disable-next-line:no-input-rename
  @Input('hl-border')
  border: boolean;

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
