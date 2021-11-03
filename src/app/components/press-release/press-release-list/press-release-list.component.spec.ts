import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressReleaseListComponent } from './press-release-list.component';

describe('PressReleaseListComponent', () => {
  let component: PressReleaseListComponent;
  let fixture: ComponentFixture<PressReleaseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressReleaseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PressReleaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
