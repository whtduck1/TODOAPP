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
  @Output() update = new EventEmitter<string>();

  editing = false;
  editedTask = '';
  cancelled = false;

  startEdit() {
    this.editing = true;
    this.cancelled = false;
    this.editedTask = this.todo.task;
  }

  confirmEdit() {
    if (this.cancelled) return;
    if (this.editedTask.trim() && this.editedTask !== this.todo.task) {
      this.update.emit(this.editedTask.trim());
    }
    this.editing = false;
  }

  cancelEdit() {
    this.cancelled = true;
    this.editing = false;
    this.editedTask = '';
  }
}
