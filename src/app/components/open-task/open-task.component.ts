import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-open-task',
  templateUrl: './open-task.component.html',
  styleUrls: ['./open-task.component.css']
})
export class OpenTaskComponent implements OnInit {

  @Input() task:Task
  userTypes:string[] = ["pedestrian","subscriber","admin","vendor"];
  colors:string[] = ["blue", "purple","cyan","yellow","grey"];
  assignees:String[] = ["scott","mark","rachael","sam"]
  difficulties:number[] = [1,3,5,7,11,13]

  selectedColor = this.colors[0];
  selectedUser = this.userTypes[0];
  selectedAssigner = null;
  selectedDifficulty = this.difficulties[0];
  newTask:boolean = true;

  constructor() {
  }

  ngOnInit() {
    if(this.task.creationDate != null){
      this.newTask = false;
    }
    console.log(this.task)
  }

  save(){
    if(this.task.creationDate == null){
      console.log("was null")
      this.task.creationDate = new Date(Date.now());
    }
    console.log("test")
  }

  cancel(){
    console.log("test")
  }

  delete(){
    console.log("test")
  }
}
