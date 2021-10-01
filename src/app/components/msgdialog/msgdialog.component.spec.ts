import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgDialog } from './msgdialog.component';

describe('MsgDialog', () => {
  let component: MsgDialog;
  let fixture: ComponentFixture<MsgDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
