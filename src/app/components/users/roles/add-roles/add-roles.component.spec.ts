import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRolesComponent } from './add-roles.component';

describe('AddRolesComponent', () => {
  let component: AddRolesComponent;
  let fixture: ComponentFixture<AddRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
