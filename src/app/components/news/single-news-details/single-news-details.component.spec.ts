import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNewsDetailsComponent } from './single-news-details.component';

describe('SingleNewsDetailsComponent', () => {
  let component: SingleNewsDetailsComponent;
  let fixture: ComponentFixture<SingleNewsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleNewsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleNewsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
