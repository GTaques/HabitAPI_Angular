import { Component, OnInit } from '@angular/core';
import { Habit } from '../../models/Habit';
import { HabitService } from '../../services/habit.service';

@Component({
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.sass']
})
export class HabitComponent implements OnInit {

  habits: Habit[];

  constructor(private habitService: HabitService) { }

  ngOnInit() {
    this.showHabit();
  }

  showHabit() {
    this.habitService.getHabits()
      .subscribe(data => {
        this.habits = data;
    })
  }

}
