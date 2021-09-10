import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMinistryDetailsComponent } from './single-ministry-details.component';

describe('SingleMinistryDetailsComponent', () => {
  let component: SingleMinistryDetailsComponent;
  let fixture: ComponentFixture<SingleMinistryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleMinistryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMinistryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
