import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSaveDialogComponent } from './create-save-dialog.component';

describe('CreateSaveDialogComponent', () => {
  let component: CreateSaveDialogComponent;
  let fixture: ComponentFixture<CreateSaveDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSaveDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSaveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
