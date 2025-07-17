import {Component, OnInit} from '@angular/core';
import {Todo} from '../../shared/todo';
import {TodoService} from '../../../services/todo';
import {AuthService} from '../../../services/authservice';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todolist',
  standalone: false,
  templateUrl: './todolist.html',
  styleUrl: './todolist.scss'
})

export class Todolist implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    const userId = this.authService.userId;
    if (!userId) return;

    this.todoService.getTodos().subscribe(data => {
      this.todos = data.filter(todo => +todo.userId === +userId);
    });
  }

  addTodoFromChild(task: string): void {
    const userId = this.authService.userId;
    if (!task || !userId) return;

    const newTodo: Omit<Todo, 'id'> = {
      userId: +userId,
      task,
      status: false
    };

    this.todoService.addTodo(newTodo).subscribe(() => {
      this.loadTodos();
    });
  }

  toggleStatus(todo: Todo): void {
    if (todo.id === undefined) return;

    todo.status = !todo.status;
    this.todoService.updateTodo(todo).subscribe();
  }

  deleteTodo(id: number | undefined): void {
    if (id === undefined) return;

    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter(t => t.id !== id);
    });
  }
}

