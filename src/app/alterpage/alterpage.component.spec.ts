import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterpageComponent } from './alterpage.component';

describe('AlterpageComponent', () => {
  let component: AlterpageComponent;
  let fixture: ComponentFixture<AlterpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
