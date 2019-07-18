import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface HabitFormData {
  title: string;
  description: string;
  priority: string;
}

@Component({
  selector: 'app-habit-form',
  templateUrl: './habit-form.component.html',
  styleUrls: ['./habit-form.component.scss']
})
export class HabitFormComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<HabitFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: HabitFormData) {}

  ngOnInit(){}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
