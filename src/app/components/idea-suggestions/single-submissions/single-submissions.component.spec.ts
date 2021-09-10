import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSubmissionsComponent } from './single-submissions.component';

describe('SingleSubmissionsComponent', () => {
  let component: SingleSubmissionsComponent;
  let fixture: ComponentFixture<SingleSubmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleSubmissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
