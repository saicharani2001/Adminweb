import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerrgstrComponent } from './managerrgstr.component';

describe('ManagerrgstrComponent', () => {
  let component: ManagerrgstrComponent;
  let fixture: ComponentFixture<ManagerrgstrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerrgstrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerrgstrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
