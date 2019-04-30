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
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent implements OnInit {
  book$: Observable<IBook[]>;
  books: IBook[];
  constructor(
    private service: BooksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  selectBook(book: IBook) {
    this.router.navigate([book.isbn], { relativeTo: this.route });
  }

  ngOnInit() {
    this.book$ = this.service.getBooks();
    this.book$.subscribe(bs => (this.books = bs));
    setInterval(() => {
      // this.books[0].publisher.name = String(new Date().getTime());
      this.books[0].publisher = {
        ...this.books[0].publisher,
        name: String(new Date().getTime())
      };
    }, 1500);
  }
}
