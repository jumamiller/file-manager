import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBureausComponent } from './add-bureaus.component';

describe('AddBureausComponent', () => {
  let component: AddBureausComponent;
  let fixture: ComponentFixture<AddBureausComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBureausComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBureausComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
