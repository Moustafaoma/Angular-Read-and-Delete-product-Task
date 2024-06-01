import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostListner]'
})
export class HostListnerDirective {
@HostListener('mouseout') onmouseout(){
  this.elemRef.nativeElement.style.boxShadow = '';
}
@HostListener('mouseenter') onMouseEnter() {
  this.elemRef.nativeElement.style.boxShadow ='0 8px 16px rgba(0, 0, 0, 0.2)';
}
  constructor(private elemRef:ElementRef) { 


  }

}
