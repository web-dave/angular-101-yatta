import {
  Directive,
  Input,
  ElementRef,
  OnChanges,
  HostListener,
  OnInit
} from '@angular/core';
import { IBook } from './book';

@Directive({
  selector: '[appOrderBtn]'
})
export class OrderBtnDirective implements OnChanges, OnInit {
  orderBtnElement: HTMLButtonElement = document.createElement('button');

  @Input() appOrderBtn: IBook;
  @Input() foo: string;

  ngOnInit(): void {
    console.log('INIT');
  }
  ngOnChanges(obj) {
    console.table(obj);
    this.orderBtnElement.innerText = 'Buy me! Now!';
  }

  @HostListener('mouseenter') onMouseEnter() {
    // console.log('mouseenter');
  }

  @HostListener('mouseleave') onMouseLeave() {
    // console.log('mouseleave');
  }

  constructor(elementRef: ElementRef) {
    console.log(elementRef);
    elementRef.nativeElement.appendChild(this.orderBtnElement);
    this.orderBtnElement.onclick = () => {
      console.log('this.orderBtn:', this.appOrderBtn);
    };
  }
}
