import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePressReleaseComponent } from './create-press-release.component';

describe('CreatePressReleaseComponent', () => {
  let component: CreatePressReleaseComponent;
  let fixture: ComponentFixture<CreatePressReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePressReleaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePressReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
