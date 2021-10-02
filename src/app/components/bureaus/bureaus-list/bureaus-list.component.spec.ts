import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BureausListComponent } from './bureaus-list.component';

describe('BureausListComponent', () => {
  let component: BureausListComponent;
  let fixture: ComponentFixture<BureausListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BureausListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BureausListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
