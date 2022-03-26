import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

import { WrapperComponent } from './components/wrapper/wrapper.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


import { DoneListComponent } from './components/wrapper/subComponents/done-list/done-list.component';
import { FilterComponent } from './components/wrapper/subComponents/filter/filter.component';
import { StatisticsComponent } from './components/wrapper/subComponents/statistics/statistics.component';
import { TaskListElementComponent } from './components/wrapper/subComponents/task-list-element/task-list-element.component';
import { ToDoListComponent } from './components/wrapper/subComponents/to-do-list/to-do-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskDialogComponent } from './components/wrapper/subComponents/task-dialog/component/task-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WrapperComponent,
    ToDoListComponent,
    DoneListComponent,
    FilterComponent,
    StatisticsComponent,
    TaskListElementComponent,
    WelcomeComponent,
    TaskDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatExpansionModule,
    HttpClientModule,
    MatSidenavModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
