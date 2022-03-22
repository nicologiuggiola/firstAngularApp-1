import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tag } from 'src/app/model/tag';
import { Task } from 'src/app/model/task';
import { ApiService } from 'src/app/services/api.service';
import { Api2Service } from 'src/app/services/api2.service';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent{

  public taskModel = {name: "", priority: 0}

  public subscription?: Subscription;

  public tags: Tag[] = [];  

  public selectedTags:Tag[] = []

  constructor(private api2S: Api2Service) {
    this.tags = api2S.tags;
  }

  selectTag(tag: Tag){
    if (tag.isSelected) {
      tag.isSelected = false;
      const indexToRemove = this.selectedTags.indexOf(tag);
      if (indexToRemove !== -1) {
        this.selectedTags.splice(indexToRemove, 1);
      }
    } else {
      tag.isSelected = true;
      this.selectedTags.push(tag)
    }
  }

  saveTask(){
    const newTask = new Task('', this.taskModel.name, this.taskModel.priority);
    if (this.selectedTags.length > 0) {
      const tags = this.selectedTags.map(t => t.name);
      newTask.tags = tags
    }
    this.subscription = this.api2S.createTask(newTask).subscribe({
      next: task => {this.api2S.addActiveTask(task)},
      error: err => {
        prompt("error")
      }
    });
    
    // this.apiS.createTask(newTask.toDatabaseModel()).subscribe(b => {
    //   if(!b){
    //     prompt("errore nel backend");
    //   }
    // })
  }

  // ngOnDestroy(): void {
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //   }
  // }



}

