import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-day-tabs',
  standalone: false,
  templateUrl: './day-tabs.html',
  styleUrl: './day-tabs.scss'
})
export class DayTabs {
  @Output() dateChange = new EventEmitter<string>();

  days = this.generateWeek();
  selected: string = this.days[0].date;

  generateWeek() {
    const today = new Date();
    const week: { name: string; date: string }[] = [];

    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() - today.getDay() + 1 + i);
      week.push({
        name: d.toLocaleDateString('pl-PL', { weekday: 'short' }).toUpperCase(),
        date: d.toISOString().split('T')[0],
      });
    }

    return week;
  }

  onSelect(date: string) {
    this.selected = date;
    this.dateChange.emit(date);
  }
}
