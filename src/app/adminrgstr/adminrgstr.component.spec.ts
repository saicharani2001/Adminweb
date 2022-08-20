import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrgstrComponent } from './adminrgstr.component';

describe('AdminrgstrComponent', () => {
  let component: AdminrgstrComponent;
  let fixture: ComponentFixture<AdminrgstrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminrgstrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminrgstrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
