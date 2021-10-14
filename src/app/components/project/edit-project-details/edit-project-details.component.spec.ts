import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectDetailsComponent } from './edit-project-details.component';

describe('EditProjectDetailsComponent', () => {
  let component: EditProjectDetailsComponent;
  let fixture: ComponentFixture<EditProjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProjectDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
