import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LosedialogComponent } from './losedialog.component';

describe('LosedialogComponent', () => {
  let component: LosedialogComponent;
  let fixture: ComponentFixture<LosedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LosedialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LosedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
