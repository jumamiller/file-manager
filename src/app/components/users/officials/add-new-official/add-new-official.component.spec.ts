import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewOfficialComponent } from './add-new-official.component';

describe('AddNewOfficialComponent', () => {
  let component: AddNewOfficialComponent;
  let fixture: ComponentFixture<AddNewOfficialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewOfficialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewOfficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
