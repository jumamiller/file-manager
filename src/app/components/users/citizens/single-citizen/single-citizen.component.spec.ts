import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCitizenComponent } from './single-citizen.component';

describe('SingleCitizenComponent', () => {
  let component: SingleCitizenComponent;
  let fixture: ComponentFixture<SingleCitizenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCitizenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCitizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
