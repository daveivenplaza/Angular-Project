import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSaveDialogComponent } from './update-save-dialog.component';

describe('UpdateSaveDialogComponent', () => {
  let component: UpdateSaveDialogComponent;
  let fixture: ComponentFixture<UpdateSaveDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSaveDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSaveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
