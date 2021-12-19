import { Component } from '@angular/core';
import { authors, Author } from '../authors.model';

@Component({
  selector: 'author-list',
  template: `
  <author-detail *ngFor="let author of authors" [author]="author" (select)="onSelect($event)" (delete)="onDelete($event)"></author-detail>
  <br>
  <div>
  current selected author: {{currentAuthor ?.firstName}}{{currentAuthor ?.lastName}}
  </div>
  `,
})
export class AuthorListComponent {
  authors = authors;
  currentAuthor = authors[0];

  onSelect(selectAuthor: Author) {
    this.currentAuthor = selectAuthor;
  }
  onDelete(id: number) {
    this.authors = this.authors.filter((author) => {
      return author.id != id;
    });

    if (this.currentAuthor.id === id) {
      this.currentAuthor = this.authors[0];
    }
  }
}
