import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerProjectsComponent } from './volunteer-projects.component';

describe('VolunteerProjectsComponent', () => {
  let component: VolunteerProjectsComponent;
  let fixture: ComponentFixture<VolunteerProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
