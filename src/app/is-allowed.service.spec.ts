import { TestBed } from '@angular/core/testing';

import { IsAllowedService } from './is-allowed.service';

describe('IsAllowedService', () => {
  let service: IsAllowedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsAllowedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
