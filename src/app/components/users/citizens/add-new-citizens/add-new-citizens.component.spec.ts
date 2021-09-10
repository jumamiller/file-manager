import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCitizensComponent } from './add-new-citizens.component';

describe('AddNewCitizensComponent', () => {
  let component: AddNewCitizensComponent;
  let fixture: ComponentFixture<AddNewCitizensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewCitizensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewCitizensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
