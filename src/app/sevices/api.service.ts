import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Task } from "../model/task";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API_URL = 'https://6229de55be12fc4538aa6c8e.mockapi.io/task';

  constructor(private http: HttpClient) { }

  getActiveTask(): Observable<Task[]>{
    return this.http.get<any[]>(this.API_URL).pipe(
      map(elements => elements.filter(el => !el.doneDate)),
      // map(elements => elements.map(el => this.parseTask(el)))
      map(elements => elements.map(el => Task.createFromJsonObj(el)))
    );
  }

  getDoneTask(): Observable<Task[]>{
    return this.http.get<any[]>(this.API_URL).pipe(
      map(elements => elements.filter(el => el.doneDate)),
      map(elements => elements.map(el => this.parseTask(el)))
    );
  }

  parseTask(obj: any): Task {
    const task = new Task(obj.id, obj.name, obj.priority, obj.creationDate);
    if (obj.doneDate) {
      task.doneDate = new Date(obj.doneDate);
    }
    return task;
  }

}
