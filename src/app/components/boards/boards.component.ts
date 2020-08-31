import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
  task: Task = {id: 1,
    boardId: 0,
    assignedPerson: "",
    description: "",
    difficulty: 1,
    imgRef: null,
    creationDate: new Date(Date.now()),
    color: "blue"}

  constructor() { }

  ngOnInit() {
  }
  createTask(){
    console.log("open component");
  }

}
