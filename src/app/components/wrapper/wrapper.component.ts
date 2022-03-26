import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription, timer } from 'rxjs';
import { Tag } from 'src/app/model/tag';
import { Task } from 'src/app/model/task';
import { Api2Service } from 'src/app/services/api2.service';
import { ComService } from 'src/app/services/com.service';
import { TaskDialogComponent } from './subComponents/task-dialog/component/task-dialog.component';

export interface DialogData {
  priority: number;
  name: string;
  tags: string[];
}

// export interface Tag{
//   name: string;
//   isSelected: boolean;
// }

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  public drawerOpen = false;
  public priority?: number;
  public name?: string;
  public taskModel = {}as Task;
  public selectedTags:Tag[] = []
  public subscription?: Subscription;

  constructor(public comS: ComService, public dialog: MatDialog, private api2S:Api2Service) { }

  ngOnInit(): void {
    this.comS.isDrawerOpen.subscribe(isOpen => {
      this.drawerOpen = isOpen;
    });

  }

  saveTask(data:Task){
    const newTask = new Task('', data.name, data.priority);
    newTask.tags = data.tags;
    this.subscription = this.api2S.createTask(newTask).subscribe({
      next: task => {this.api2S.addActiveTask(task)},
      error: err => {
        prompt("error")
      }
    });
  }

  
  openDialog(){
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '400px',
      data: {name: this.name, priority: this.priority,tags:this.selectedTags},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.taskModel = {id: "", name:result.name, priority:result.priority};
      this.saveTask(result)
    });
  }

}
