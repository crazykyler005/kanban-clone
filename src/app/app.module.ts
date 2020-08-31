import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { BoardsComponent } from './components/boards/boards.component';
import { OpenTaskComponent } from './components/open-task/open-task.component';
import { ColorDropdownComponent } from './shared/color-dropdown/color-dropdown.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { FormsModule } from '@angular/forms'
import { MatSelectModule, MatFormFieldModule, MatOptionModule, MatButtonModule, MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    BoardsComponent,
    OpenTaskComponent,
    ColorDropdownComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
