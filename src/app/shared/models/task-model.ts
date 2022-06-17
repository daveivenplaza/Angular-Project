import { TaskStatus } from "./task-status";
export interface TaskModel {
    taskID: string;
    taskName: string;
    tag: TagModel;
    dateCreated: Date;
    dateModified: Date;
    taskDescription: string;
    status: TaskStatus;
    dateCompleted: Date;
  }

  export interface TagModel {
    
    tagId: string;
    name: string;
    
  }

  export interface DialogParams{
    title: string,
    task: TaskModel
  }