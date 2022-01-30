import { TestBed } from '@angular/core/testing';

import { IsHowardGuard } from './is-howard.guard';

describe('IsHowardGuard', () => {
  let guard: IsHowardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsHowardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
