import { TaskModel } from "../models/task-model"; 
import { TaskStatus } from "../models/task-status"; 

export const taskSeed = [
      {taskID: '1', taskName: "Movie night", taskDescription: 'Movie night with Selena Gomez.', dateModified: new Date(), dateCreated: new Date(), status: 0,
      tag: [ 
        { tagId: '1', name: 'Sample'}
      ]},
      {taskID: '2', taskName: "Date Night", taskDesciption: 'Date with Taylor Swift.', lastModified: new Date(), dateCreated: new Date(), status: 0,
      tags: [ 
        { tagId: '1', tagName: 'Sample'}
      ]},
      {id: '3', taskName: "Movie night", taskDesciption: 'Movie night with Selena Gomez.', completionRate: 2, lastModified: new Date(), dateCreated: new Date(), status: TaskStatus.New,
      tags: [ 
        { tagId: '1', tagName: 'Sample', created: new Date(),  modified: new Date()}
      ]},
      {id: '4', taskName: "Movie night", taskDesciption: 'Movie night with Selena Gomez.', completionRate: 5, lastModified: new Date(), dateCreated: new Date(), status: TaskStatus.New,
      tags: [ 
        { tagId: '1', tagName: 'Sample', created: new Date(),  modified: new Date()}
      ]},
      {id: '5', taskName: "Movie night", taskDesciption: 'Movie night with Selena Gomez.', completionRate: 3, lastModified: new Date(), dateCreated: new Date(), status: TaskStatus.Completed, 
      tags: [ 
        { tagId: '1', tagName: 'Sample', created: new Date(),  modified: new Date()}
      ]},
      
]