import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicServicesComponent } from './academic-services.component';

describe('AcademicServicesComponent', () => {
  let component: AcademicServicesComponent;
  let fixture: ComponentFixture<AcademicServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
