import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../shared/books.service';
import { IBook } from '../shared/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailsComponent implements OnInit {
  book: IBook;
  constructor(
    private route: ActivatedRoute,
    private service: BooksService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getBook(params.isbn).subscribe(b => {
        this.book = b;
        this.cdr.detectChanges();
      });
    });
  }
}
