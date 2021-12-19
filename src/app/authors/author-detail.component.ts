import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Author } from '../authors.model';

@Component({
  selector: 'author-detail',
  template: `
  <div>
  {{author.firstName}} {{author.lastName}}

  <button [style.marginLeft.rem]="1" (click)="select.emit(author)">Selected</button>
  <button [style.marginLeft.rem]="1" (click)="delete.emit(author.id)">X</button>
  </div>
  `,
})
export class AuthorDetailComponent {
  @Input() author: Author;
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();
}
