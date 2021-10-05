import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBureauDetailsComponent } from './single-bureau-details.component';

describe('SingleBureauDetailsComponent', () => {
  let component: SingleBureauDetailsComponent;
  let fixture: ComponentFixture<SingleBureauDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleBureauDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBureauDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
