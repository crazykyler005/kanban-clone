export interface Task {
  id: number;
  assignedPerson: string;
  description: string;
  difficulty: number;
  imgRef?: string;
  creationData: Date;
  color: string;
  //deleted: boolean;
}