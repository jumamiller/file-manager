import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistriesListComponent } from './ministries-list.component';

describe('MinistriesListComponent', () => {
  let component: MinistriesListComponent;
  let fixture: ComponentFixture<MinistriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinistriesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
