import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetaskDialogComponent } from './createtask-dialog.component';

describe('CreatetaskDialogComponent', () => {
  let component: CreatetaskDialogComponent;
  let fixture: ComponentFixture<CreatetaskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatetaskDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
