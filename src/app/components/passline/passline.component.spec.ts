import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassLine } from './passline.component';

describe('PassLine', () => {
  let component: PassLine;
  let fixture: ComponentFixture<PassLine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassLine ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassLine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
