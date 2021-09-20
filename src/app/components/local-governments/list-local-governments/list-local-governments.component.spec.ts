import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLocalGovernmentsComponent } from './list-local-governments.component';

describe('ListLocalGovernmentsComponent', () => {
  let component: ListLocalGovernmentsComponent;
  let fixture: ComponentFixture<ListLocalGovernmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLocalGovernmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLocalGovernmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
