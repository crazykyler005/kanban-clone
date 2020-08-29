export interface Task {
    id: number;
    assignedUser: string;
    type:string;
    title: string;
    story: string;
    metric?: number;
    imgRef?: string;
    creationData: Date;
    color: string;
    deleted:false;
  }