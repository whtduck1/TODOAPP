import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-day-tabs',
  standalone: false,
  templateUrl: './day-tabs.html',
  styleUrl: './day-tabs.scss'
})
export class DayTabs implements OnInit {
  @Output() dateChange = new EventEmitter<string>();
  days = this.generateWeek();
  activeDate = this.getTodayISO();

  ngOnInit() {
    this.dateChange.emit(this.activeDate);
  }

  getTodayISO(): string {
    return new Date().toISOString().split('T')[0];
  }

  generateWeek() {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay() + 1);
    const week: { name: string, date: string }[] = [];

    for (let i = 0; i < 7; i++) {
      const d = new Date(startOfWeek);
      d.setDate(startOfWeek.getDate() + i);
      week.push({
        name: d.toLocaleDateString('pl-PL', { weekday: 'short' }).toUpperCase(),
        date: d.toISOString().split('T')[0]
      });
    }
    return week;
  }

  selectedDate(date: string) {
    this.activeDate = date;
    this.dateChange.emit(date);
  }
}
