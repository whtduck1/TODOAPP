import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from '../../shared/todo';

@Component({
  selector: 'app-todoitems',
  standalone: false,
  templateUrl: './todoitems.html',
  styleUrl: './todoitems.scss'
})
export class Todoitems {

  @Input() todo!: Todo;
  @Output() toggle = new EventEmitter<Todo>();
  @Output() remove = new EventEmitter<number>();


}
