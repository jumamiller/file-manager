import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizensListComponent } from './citizens-list.component';

describe('CitizensListComponent', () => {
  let component: CitizensListComponent;
  let fixture: ComponentFixture<CitizensListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizensListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizensListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
