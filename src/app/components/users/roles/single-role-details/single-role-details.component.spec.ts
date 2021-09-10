import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRoleDetailsComponent } from './single-role-details.component';

describe('SingleRoleDetailsComponent', () => {
  let component: SingleRoleDetailsComponent;
  let fixture: ComponentFixture<SingleRoleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleRoleDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRoleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
