import { Component } from '@angular/core';

export class Book {
  id: number;
  name: string;
}
const BOOKS: Book[] = [
  { id: 11, name: 'GOT' },
  { id: 12, name: 'Source of happiness' },
  { id: 13, name: 'OSHO' },
  { id: 14, name: 'Think Big' },
  { id: 15, name: 'Power of Positive thinking' },
  { id: 16, name: 'Rich dad' },
  { id: 17, name: 'Who moved my cheese' },
  { id: 18, name: 'Friends' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'New life' }
];


@Component({
  selector: 'my-app',
 template: `
    <h1>{{title}}</h1>
    <h2>List of Books</h2>
    <ul class="heroes">
      <li *ngFor="let book of books"
        [class.selected]="book === selectedBook"
        (click)="onSelect(book)">
        <span class="badge">{{book.id}}</span> {{book.name}}
      </li>
    </ul>
    <div *ngIf="selectedBook">
      <h2>{{selectedBook.name}} details!</h2>
      <div><label>id: </label>{{selectedBook.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedBook.name" placeholder="name"/>
      </div>
    </div>
  `,
styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .books {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .books li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #adadad;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .books li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .books li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .books .text {
      position: relative;
      top: -3px;
    }
    .books .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class AppComponent { 
    title = "Library Books";     
   books= BOOKS;
    selectedBook: Book;
     onSelect(book: Book): void {
    this.selectedBook = book;
  }  
}



