import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReimburesementsComponent } from './my-reimburesements.component';

describe('MyReimburesementsComponent', () => {
  let component: MyReimburesementsComponent;
  let fixture: ComponentFixture<MyReimburesementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyReimburesementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReimburesementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
