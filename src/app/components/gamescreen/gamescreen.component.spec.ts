import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameScreen } from './gamescreen.component';

describe('GameScreen', () => {
  let component: GameScreen;
  let fixture: ComponentFixture<GameScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameScreen ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
