import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoseDialog } from './losedialog.component';

describe('LoseDialog', () => {
  let component: LoseDialog;
  let fixture: ComponentFixture<LoseDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoseDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoseDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
