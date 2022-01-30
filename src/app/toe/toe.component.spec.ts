import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToeComponent } from './toe.component';

describe('ToeComponent', () => {
  let component: ToeComponent;
  let fixture: ComponentFixture<ToeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
