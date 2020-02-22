import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit {

  @Input() defaultColor: string = 'red';
  @Input('appBetterDirective') mouseOverColor: string = 'yellow';
  @HostBinding('style.backgroundColor') bgColor: string;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
    this.bgColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseOver(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
    this.bgColor = this.mouseOverColor;
  }

  @HostListener('mouseleave') mouseLeave(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
    // this.bgColor = 'transparent'
    this.bgColor = this.defaultColor;
  }

}
