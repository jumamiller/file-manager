import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubCategoryComponent } from './add-sub-category.component';

describe('AddSubCategoryComponent', () => {
  let component: AddSubCategoryComponent;
  let fixture: ComponentFixture<AddSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
