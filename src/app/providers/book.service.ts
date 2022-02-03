import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  favorite: Book = new Book();

  constructor(public httpClient: HttpClient) {}

  getFavorite(): Book {
    return this.favorite;
  }

  setFavorite(book: Book): void {
    this.favorite = book;
  }
  
  getSearchResults(input: string): Observable<Book>{
    let url = 'https://www.googleapis.com/books/v1/volumes?q='+input;
    return this.httpClient.get(url)
      .pipe(mergeMap((value: any) => {
        return value.items;
      }))
      .pipe(map((value: any) => {
        return value.volumeInfo;
      }))
      .pipe(map((value: any) => {
        let book = new Book();
        book.title = value.title;
        book.description = value.description;
        book.author = value.author;
        book.type = value.type;
        book.thumbnail = value.imageLinks.thumbnail;
        return book;
      }));

  }

  getBooksToRead(): Book[]{
    let results: Book[] = [];
    for(let i =0; i<3; i++){
      let result: Book = new Book();
      result.title = 'To Read' + i;
      results.push(result);
    }
    return results;
  }
}
