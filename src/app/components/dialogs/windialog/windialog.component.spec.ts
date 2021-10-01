import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinDialog } from './windialog.component';

describe('WinDialog', () => {
  let component: WinDialog;
  let fixture: ComponentFixture<WinDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
