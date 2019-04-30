import { Component, OnInit } from '@angular/core';
import { BooksService } from '../shared/books.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit {
  form: FormGroup;
  saved = false;
  constructor(
    private formBuilder: FormBuilder,
    private service: BooksService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)])
      ],
      isbn: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)])
      ],
      publisher: this.formBuilder.group({
        name: ['', Validators.required],
        url: ['', Validators.required]
      })
    });
  }

  isSaved(): boolean {
    console.log(this.form);
    return this.form.pristine;
    // return this.saved || this.form.pristine;
  }

  saveBook() {
    const book = {
      ...this.service.newBook(),
      ...this.form.value
    };

    this.service.createBook(book).subscribe(b => {
      // this.saved = true;
      this.form.markAsPristine();
      this.router.navigate(['..', b.isbn], { relativeTo: this.route });
    });
  }
}
