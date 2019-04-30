import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { IBook } from '../shared/book';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookPreviewComponent implements OnInit {
  @Input() book: IBook;
  @Output() bookselected = new EventEmitter<IBook>();
  constructor(private cdr: ChangeDetectorRef) {}
  selectThisBook() {
    this.bookselected.emit(this.book);
  }
  ngOnInit() {}
}
