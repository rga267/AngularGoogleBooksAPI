import { TestBed } from '@angular/core/testing';
import { Book } from '../models/book';
import { BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getFavorite', () => {
    it('returns a book', () => {
      let result: Book = service.getFavorite();
      expect(result).toBeTruthy();
    });
  });

  describe('getSearchResults', () => {
    it('returns 10 books', () => {
      let results: Book[] = service.getSearchResults('billy');
      expect(results).toBeTruthy();
      expect(results.length).toBe(10);
    });

    it('has a title for each book of "Search Result #', () => {
      let results: Book[] = service.getSearchResults('billy');
      for(let i=0; i<10; i++){
        expect(results[i].title).toBe('Search Result' + i);
      }
    });
  });

  describe('getBooksToRead', () =>{
    it('returns 3 books', () => {
      let results: Book[] = service.getBooksToRead();
      expect(results).toBeTruthy();
      expect(results.length).toBe(3);
    });

    it('has a title for each book of "To Read #', () =>{
      let results: Book[] = service.getBooksToRead();
      for(let i=0; i<3; i++){
        expect(results[i].title).toBe('To Read' + i);
      }
    })
  });
});
