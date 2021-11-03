import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressReleaseEditComponent } from './press-release-edit.component';

describe('PressReleaseEditComponent', () => {
  let component: PressReleaseEditComponent;
  let fixture: ComponentFixture<PressReleaseEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressReleaseEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PressReleaseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
