import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAppearanceComponent } from './account-appearance.component';

describe('AccountAppearanceComponent', () => {
  let component: AccountAppearanceComponent;
  let fixture: ComponentFixture<AccountAppearanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountAppearanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountAppearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
