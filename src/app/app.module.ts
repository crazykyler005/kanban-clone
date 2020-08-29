import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { BoardsComponent } from './components/boards/boards.component';
import { OpenTaskComponent } from './components/open-task/open-task.component';
import { ColorDropdownComponent } from './shared/color-dropdown/color-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    BoardsComponent,
    OpenTaskComponent,
    ColorDropdownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
