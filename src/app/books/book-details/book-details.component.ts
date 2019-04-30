import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../shared/books.service';
import { IBook } from '../shared/book';
import { LoadBook } from '../shared/loadBook';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class BookDetailsComponent extends LoadBook {
  constructor(
    route: ActivatedRoute,
    service: BooksService,
    cdr: ChangeDetectorRef
  ) {
    super(route, service, cdr);
  }

  add(a, b) {
    return a + b;
  }
}
