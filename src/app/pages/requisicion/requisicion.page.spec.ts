import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisicionPage } from './requisicion.page';

describe('RequisicionPage', () => {
  let component: RequisicionPage;
  let fixture: ComponentFixture<RequisicionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisicionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisicionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
