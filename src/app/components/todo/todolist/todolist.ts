import {Component, OnInit} from '@angular/core';
import {Todo} from '../../shared/todo';
import {TodoService} from '../../../services/todo';

@Component({
  selector: 'app-todolist',
  standalone: false,
  templateUrl: './todolist.html',
  styleUrl: './todolist.scss'
})

  export class Todolist implements OnInit {
  todos: Todo[] = [];
  newTask: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  addTodo() {
    const currentUser = JSON.parse(localStorage.getItem('user')!);

    if (!this.newTask.trim()) return;

    const newTodo: Todo = {
      userId: currentUser.id,
      task: this.newTask.trim(),
      status: false
    } as Todo;


    this.todoService.addTodo(newTodo).subscribe(() => {
      this.newTask = '';
      this.loadTodos();
    });
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => this.loadTodos());
  }

  toggleStatus(todo: Todo) {
    const updated = { ...todo, status: !todo.status };
    this.todoService.updateTodo(updated).subscribe(() => this.loadTodos());
  }
}

