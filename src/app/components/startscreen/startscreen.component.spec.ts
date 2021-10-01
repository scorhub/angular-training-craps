import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartScreen } from './startscreen.component';

describe('StartScreen', () => {
  let component: StartScreen;
  let fixture: ComponentFixture<StartScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartScreen ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
