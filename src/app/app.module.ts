import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatTableModule, MatInputModule, MatFormFieldModule, MatDialogModule, MatSelectModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HabitComponent } from './components/habit/habit.component';
import { HabitFormComponent } from './components/habit/habit-form/habit-form.component';

import { HabitService } from './services/habit.service';
import { PriorityPipe } from './pipes/priority.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HabitComponent,
    PriorityPipe,
    HabitFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule
  ],
  exports: [
    HabitFormComponent,
  ],
  entryComponents: [
    HabitFormComponent,
  ],
  providers: [
    HabitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
