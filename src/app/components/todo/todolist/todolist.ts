import { Component, OnInit } from '@angular/core';
import { Todo } from '../../shared/todo';
import { TodoService } from '../../../services/todo';
import { AuthService } from '../../../services/authservice';

@Component({
  selector: 'app-todolist',
  standalone: false,
  templateUrl: './todolist.html',
  styleUrl: './todolist.scss'
})
export class Todolist implements OnInit {
  todos: Todo[] = [];
  loading = false;

  feedbackMessage = '';
  feedbackType: 'success' | 'error' | '' = '';

  constructor(
    private todoService: TodoService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    const userId = this.authService.userId;
    if (!userId) return;

    this.loading = true;
    this.todoService.getTodos().subscribe({
      next: data => {
        this.todos = data.filter(todo => +todo.userId === +userId);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.showFeedback('❌ Błąd ładowania zadań', 'error');
      }
    });
  }

  addTodoFromChild(task: string): void {
    const userId = this.authService.userId;
    if (!task.trim() || !userId) return;

    const newTodo: Omit<Todo, 'id'> = {
      userId: +userId,
      task: task.trim(),
      status: false
    };

    this.loading = true;
    this.todoService.addTodo(newTodo).subscribe({
      next: () => {
        this.loadTodos();
        this.showFeedback('✅ Zadanie dodane!', 'success');
      },
      error: () => {
        this.loading = false;
        this.showFeedback('❌ Nie udało się dodać', 'error');
      }
    });
  }

  toggleStatus(todo: Todo): void {
    if (todo.id === undefined) return;

    this.loading = true;
    todo.status = !todo.status;
    this.todoService.updateTodo(todo).subscribe({
      next: () => {
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.showFeedback('❌ Błąd przy zapisie statusu', 'error');
      }
    });
  }

  deleteTodo(id: number | undefined): void {
    if (id === undefined) return;

    this.loading = true;
    this.todoService.deleteTodo(id).subscribe({
      next: () => {
        this.todos = this.todos.filter(t => t.id !== id);
        this.loading = false;
        this.showFeedback('🗑️ Zadanie usunięte', 'success');
      },
      error: () => {
        this.loading = false;
        this.showFeedback('❌ Nie udało się usunąć', 'error');
      }
    });
  }

  updateTodo(todo: Todo, newTask: string): void {
    if (!newTask.trim()) return;

    const updated = { ...todo, task: newTask.trim() };

    this.loading = true;
    this.todoService.updateTodo(updated).subscribe({
      next: () => {
        this.loadTodos();
        this.showFeedback('✏️ Zadanie zaktualizowane', 'success');
      },
      error: () => {
        this.loading = false;
        this.showFeedback('❌ Nie udało się edytować', 'error');
      }
    });
  }

  showFeedback(message: string, type: 'success' | 'error') {
    this.feedbackMessage = message;
    this.feedbackType = type;
    setTimeout(() => {
      this.feedbackMessage = '';
      this.feedbackType = '';
    }, 3000);
  }
}
