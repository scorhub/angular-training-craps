import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindialogComponent } from './windialog.component';

describe('WindialogComponent', () => {
  let component: WindialogComponent;
  let fixture: ComponentFixture<WindialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
