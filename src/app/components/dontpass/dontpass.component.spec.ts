import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DontpassComponent } from './dontpass.component';

describe('DontpassComponent', () => {
  let component: DontpassComponent;
  let fixture: ComponentFixture<DontpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DontpassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DontpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
