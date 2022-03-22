import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/model/tag';
import { Api2Service } from 'src/app/services/api2.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent{

  public searchString = "";

  public tags:Tag[] = [];

  public selectedTags: Tag[] = [];

  constructor(private api2S: Api2Service) {
    this.tags = api2S.tags;
  }

  findTasks(){
    let tagString;
    if (this.selectedTags.length > 0) {
      tagString = this.selectedTags.map(tag => tag.name)
    }
    this.api2S.getActiveTasks(this.searchString, tagString);
    this.api2S.getDoneTasks(this.searchString, tagString);
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
      this.selectedTags.push(tag);
    }
    this.findTasks()
  }

}
