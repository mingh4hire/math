import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgoodcompComponent } from './agoodcomp.component';

describe('AgoodcompComponent', () => {
  let component: AgoodcompComponent;
  let fixture: ComponentFixture<AgoodcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgoodcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgoodcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
