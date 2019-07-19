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

  //priority =  {"Very Low": 1, "Low": 2, "Medium": 3, "High": 4, "Very High": 5}
  priority =  {1: "Very Low", 2: "Low", 3:"Medium", 4:"High", 5:"Very High"}

  constructor(
    public dialogRef: MatDialogRef<HabitFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: HabitFormData) {}

  ngOnInit(){}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
