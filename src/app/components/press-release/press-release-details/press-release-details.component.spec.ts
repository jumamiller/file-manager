import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressReleaseDetailsComponent } from './press-release-details.component';

describe('PressReleaseDetailsComponent', () => {
  let component: PressReleaseDetailsComponent;
  let fixture: ComponentFixture<PressReleaseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressReleaseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PressReleaseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
