import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Habit } from '../models/Habit';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HabitService {

  constructor(private http: HttpClient) { }

  getHabits(): Observable<Habit[]> {
    return this.http.get<Habit[]>("http://localhost:8000/habit/");
  }

  postHabit(habit: Habit): Observable<Habit> {
    return this.http.post<Habit>("http://localhost:8000/habit/", habit)
      .pipe(
        //catchError(this.handleError('addHero', hero))
      )
  }
}
