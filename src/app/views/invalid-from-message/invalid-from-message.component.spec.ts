import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidFromMessageComponent } from './invalid-from-message.component';

describe('InvalidFromMessageComponent', () => {
  let component: InvalidFromMessageComponent;
  let fixture: ComponentFixture<InvalidFromMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidFromMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidFromMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
