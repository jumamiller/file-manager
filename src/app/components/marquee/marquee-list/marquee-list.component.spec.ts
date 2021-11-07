import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueeListComponent } from './marquee-list.component';

describe('MarqueeListComponent', () => {
  let component: MarqueeListComponent;
  let fixture: ComponentFixture<MarqueeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarqueeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarqueeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
