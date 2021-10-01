import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasslineComponent } from './passline.component';

describe('PasslineComponent', () => {
  let component: PasslineComponent;
  let fixture: ComponentFixture<PasslineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasslineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasslineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
