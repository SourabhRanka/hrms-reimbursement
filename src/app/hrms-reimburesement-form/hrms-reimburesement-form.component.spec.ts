import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmsReimburesementFormComponent } from './hrms-reimburesement-form.component';

describe('HrmsReimburesementFormComponent', () => {
  let component: HrmsReimburesementFormComponent;
  let fixture: ComponentFixture<HrmsReimburesementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrmsReimburesementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrmsReimburesementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
