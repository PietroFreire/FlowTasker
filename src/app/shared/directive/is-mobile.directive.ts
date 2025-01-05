import { Directive, ElementRef, Renderer2, HostListener, OnInit } from '@angular/core';

@Directive({
  standalone: false,
  selector: '[appIsMobile]'
})
export class IsMobileDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.updateClass();
  }

  @HostListener('window:resize') onResize() {
    this.updateClass();
  }

  private updateClass() {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      this.renderer.addClass(this.el.nativeElement, 'mobile');
      this.renderer.removeClass(this.el.nativeElement, 'desktop');
    } else {
      this.renderer.addClass(this.el.nativeElement, 'desktop');
      this.renderer.removeClass(this.el.nativeElement, 'mobile');
    }
  }
}
