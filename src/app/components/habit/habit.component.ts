import { Component, OnInit } from '@angular/core';
import { Habit } from '../../models/Habit';
import { HabitFormComponent } from './habit-form/habit-form.component';
import { HabitService } from '../../services/habit.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.scss']
})
export class HabitComponent implements OnInit {

  title: string;
  description: string;
  priority:string;
  habit: Habit;
  habits: Habit[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor(private habitService: HabitService, public dialog: MatDialog) { }

  ngOnInit() {
    this.showHabit();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(HabitFormComponent, {
      width: '250px',
      data: {title: this.title, description: this.description, priority: this.priority}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);

      this.habit = result;
    });
  }

  showHabit() {
    this.habitService.getHabits()
      .subscribe(data => {
        this.habits = data;
    })
  }

}
