import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  task: Task = {id: 1,
    boardId: 0,
    assignedPerson: "",
    description: "",
    difficulty: 1,
    imgRef: null,
    creationDate: new Date(Date.now()),
    color: null}

  constructor() { }

  ngOnInit() {
  }

}
