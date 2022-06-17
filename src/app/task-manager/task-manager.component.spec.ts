import { ChangeDetectorRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MockChangeDetect } from '../shared/mock-test/mock-changeDetect';
import { MockDialog } from '../shared/mock-test/mock-dialog';
import { MockRouter } from '../shared/mock-test/mock-router';
import { MockSnackBar } from '../shared/mock-test/mock-snackBar';
import { MockTaskService } from '../shared/mock-test/mock-task-service';
import { TaskService } from '../shared/services/task.service';
import { taskSeed } from '../shared/services/tasks';

import { TaskManagerComponent } from './task-manager.component';

describe('TaskManagerComponent', () => {
  let component: TaskManagerComponent;
  let fixture: ComponentFixture<TaskManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskManagerComponent ],
      providers: [
        {
          provide: MatDialog,
          useValue: MockDialog
        },
        {
          provide: TaskService,
          useClass: MockTaskService
        },
        {
          provide: Router,
          useValue: MockRouter
        },
        {
          provide: ChangeDetectorRef,
          useValue: MockChangeDetect
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should retreive all tasks from the database", () => {
    component.populate()
    expect(component.dataSource.data.length).toEqual(taskSeed.length)
  });

  it("Should delete a task from the database", () => {
    const data = 2;
    component.deleteWithService(data);

    expect(component.dataSource.data.length).toBeLessThan(taskSeed.length);
  });

});