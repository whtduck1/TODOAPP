import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-todoform',
  standalone: false,
  templateUrl: './todoform.html',
  styleUrl: './todoform.scss'
})
export class Todoform {
  task = '';

  @Output() add = new EventEmitter<string>();

  onSubmit() {
    if (this.task.trim()) {
      this.add.emit(this.task.trim());
      this.task = '';
    }
  }
}
