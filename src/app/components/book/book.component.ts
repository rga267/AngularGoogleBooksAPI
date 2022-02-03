import { Component, Input, OnInit, Output } from '@angular/core';
import { Console } from 'console';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/providers/book.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'gb-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {
  @Input()
  book: Book = new Book;

  @Input()
  isFavorite: boolean = false;

  @Output()
  favoriteEvent: EventEmitter<Book> = new EventEmitter();

  constructor() {
  }

  favorite(): void {
    this.favoriteEvent.emit(this.book);
  }

  ngOnInit(): void {
  }

}
