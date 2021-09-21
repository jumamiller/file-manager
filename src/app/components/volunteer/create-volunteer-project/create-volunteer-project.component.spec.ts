import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVolunteerProjectComponent } from './create-volunteer-project.component';

describe('CreateVolunteerProjectComponent', () => {
  let component: CreateVolunteerProjectComponent;
  let fixture: ComponentFixture<CreateVolunteerProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVolunteerProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVolunteerProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
