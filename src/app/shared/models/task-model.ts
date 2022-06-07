export interface TaskModel {
    id: number;
    taskName: string;
    taskDesciption: string;
    completionRate: number;
    lastModified: Date;
    dateCreated: Date;
    status: string;
  }