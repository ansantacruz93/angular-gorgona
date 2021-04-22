import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CxCheckBoxComponent } from './cx-check-box.component';

describe('CxCheckBoxComponent', () => {
  let component: CxCheckBoxComponent;
  let fixture: ComponentFixture<CxCheckBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CxCheckBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CxCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
