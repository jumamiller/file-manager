import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleOfficialComponent } from './single-official.component';

describe('SingleOfficialComponent', () => {
  let component: SingleOfficialComponent;
  let fixture: ComponentFixture<SingleOfficialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleOfficialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleOfficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
