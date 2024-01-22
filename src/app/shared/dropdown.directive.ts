import { ContentChild, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @ContentChild('dropdown') dropdownMenu!: ElementRef<HTMLDivElement>;
  @ContentChild('svg') svg!: ElementRef;
  
  @HostListener('click') toggleOpen() {
    this.dropdownMenu.nativeElement.classList.toggle("hidden");
    this.dropdownMenu.nativeElement.classList.toggle("flex");
    this.svg.nativeElement.classList.toggle("rotate-180")
  }
}
