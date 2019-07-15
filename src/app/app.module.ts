import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HabitComponent } from './components/habit/habit.component';

import { HabitService } from './services/habit.service';

@NgModule({
  declarations: [
    AppComponent,
    HabitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HabitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
