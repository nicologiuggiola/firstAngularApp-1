import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { ApiService } from 'src/app/sevices/api.service';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent implements OnInit {

  doneList: Task[] = [];

  constructor(private apiS: ApiService) {
  }

  ngOnInit(): void {
    this.apiS.getDoneTask().subscribe(task => this.doneList = task);
  }

}
