import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { IBook } from '../shared/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../shared/books.service';
import { LoadBook } from '../shared/loadBook';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookEditComponent extends LoadBook {
  constructor(
    route: ActivatedRoute,
    service: BooksService,
    cdr: ChangeDetectorRef,
    router: Router
  ) {
    super(route, service, cdr, router);
  }

  saveBook() {
    this.service.updateBook(this.book).subscribe(() => {
      this.router.navigate(['..'], { relativeTo: this.route });
    });
  }
}
