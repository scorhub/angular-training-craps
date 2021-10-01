import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassLineComponent } from './passline.component';

describe('PassLineComponent', () => {
  let component: PassLineComponent;
  let fixture: ComponentFixture<PassLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
