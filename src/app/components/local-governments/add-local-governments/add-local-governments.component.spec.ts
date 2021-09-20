import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLocalGovernmentsComponent } from './add-local-governments.component';

describe('AddLocalGovernmentsComponent', () => {
  let component: AddLocalGovernmentsComponent;
  let fixture: ComponentFixture<AddLocalGovernmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLocalGovernmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLocalGovernmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
