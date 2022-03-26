import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Tag } from 'src/app/model/tag';
import { Api2Service } from 'src/app/services/api2.service';

export interface DialogData {
  priority: number;
  name: string;
  tags: string[];
}

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent {
  public taskModel = {name: "", priority: 0}

  public tags: Tag[] = [];  

  public selectedTags:Tag[] = []

  constructor(public dialogRef: MatDialogRef<TaskDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData, private api2S:Api2Service) {
    this.tags = api2S.tags;
  }

  onNoClick(): void {
    // for (const tag  of this.selectedTags) {
    //   this.data.tags.push (tag.name)
    // }

    this.dialogRef.close();
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
      console.log(tag);
      this.data.tags.push(tag.name)
      // this.selectedTags.push(tag)
    }
  }

}
