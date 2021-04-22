import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CxFieldComponent } from './cx-field.component';

describe('CxFieldComponent', () => {
  let component: CxFieldComponent;
  let fixture: ComponentFixture<CxFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CxFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CxFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
