import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProposalComponent } from './single-proposal.component';

describe('SingleProposalComponent', () => {
  let component: SingleProposalComponent;
  let fixture: ComponentFixture<SingleProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProposalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
