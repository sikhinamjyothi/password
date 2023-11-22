import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandompasswordComponent } from './randompassword.component';

describe('RandompasswordComponent', () => {
  let component: RandompasswordComponent;
  let fixture: ComponentFixture<RandompasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandompasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandompasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
