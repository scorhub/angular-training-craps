import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DontPass } from './dontpass.component';

describe('DontPass', () => {
  let component: DontPass;
  let fixture: ComponentFixture<DontPass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DontPass ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DontPass);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
