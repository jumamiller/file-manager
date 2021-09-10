import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewMinistryComponent } from './add-new-ministry.component';

describe('AddNewMinistryComponent', () => {
  let component: AddNewMinistryComponent;
  let fixture: ComponentFixture<AddNewMinistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewMinistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewMinistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
