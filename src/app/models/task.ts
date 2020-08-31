export interface Task {
  id: number;
  boardId:number;
  assignedPerson: string;
  description: string;
  difficulty: number;
  imgRef?: string;
  creationDate: Date;
  color: string;
  //deleted: boolean;
}