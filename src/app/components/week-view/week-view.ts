import { Component } from '@angular/core';

@Component({
  selector: 'app-week-view',
  standalone: false,
  templateUrl: './week-view.html',
  styleUrl: './week-view.scss'
})
export class WeekView {
  selectedDate: string = this.getToday();

  getToday(): string {
    return new Date().toISOString().split('T')[0];
  }

  onDateChange(date: string) {
    this.selectedDate = date;
  }
}
