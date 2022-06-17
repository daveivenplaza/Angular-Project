import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TaskModel } from '../models/task-model';

const headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
  'X-Skip-Interceptor': 'X-Skip Interceptor'
};

const requestOption = {
  headers: new HttpHeaders(headerDict)
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private api = environment.api;
 tableData: TaskModel[] = [];

  constructor(private http: HttpClient) { }

  getTaskData(): Observable<TaskModel[]>{
    return this.http.get<TaskModel[]>(this.api, requestOption);
  }

  getTaskById(id: string): Observable<TaskModel[]>{
    let url = this.getEndPoint('GET-BY-ID', id);
    return this.http.get<TaskModel[]>(url);
  }

  getAddTask(taskValue: any): Observable<TaskModel[]>{
    return this.http.post<TaskModel[]>(this.getEndPoint('POST'), taskValue);
  }

  getUpdateTasK(taskValue: TaskModel, id: string): Observable<TaskModel[]> {
    return this.http.put<TaskModel[]>(this.getEndPoint('PUT', id), taskValue);
  }

  getDeleteTask(id: any): Observable<TaskModel[]>{
    console.log('id-- ', id)
    return this.http.delete<TaskModel[]>(this.getEndPoint('DELETE', id));
  }

  private getEndPoint(keyword: string, parameter?: string): any{
    switch(keyword){
      case 'GET': return environment.api;
      case 'POST': return environment.api;
      case 'GET-BY-ID': return environment.api + parameter;
      case 'PUT': return environment.api + parameter;
      case 'DELETE': return environment.api + parameter;
      default: return "";
    }

  }

}