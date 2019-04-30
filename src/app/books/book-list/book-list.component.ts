import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { BooksService } from '../shared/books.service';
import { Subscription, Observable } from 'rxjs';
import { IBook } from '../shared/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent implements OnInit {
  book$: Observable<IBook[]>;
  constructor(private service: BooksService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.book$ = this.service.getBooks();
  }

  selectBook(book: IBook) {
    console.log(book);
  }
}
