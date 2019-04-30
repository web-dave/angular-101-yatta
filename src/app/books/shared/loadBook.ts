import { IBook } from './book';

import { ActivatedRoute, Router } from '@angular/router';

import { BooksService } from './books.service';

import {
  ChangeDetectorRef,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { tap, map, switchMap } from 'rxjs/operators';

export class LoadBook implements OnInit, OnChanges {
  @Input() foo = 'Moin';
  book: IBook;
  constructor(
    protected route: ActivatedRoute,
    protected service: BooksService,
    protected cdr: ChangeDetectorRef,
    protected router?: Router
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('-->', changes);
  }
  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.service.getBook(params.isbn).subscribe(b => {
    //     this.book = b;
    //     this.cdr.detectChanges();
    //   });
    // });

    this.route.params
      .pipe(switchMap(params => this.service.getBook(params.isbn)))
      .subscribe(b => {
        this.book = b;
        this.cdr.detectChanges();
      });
  }
}
