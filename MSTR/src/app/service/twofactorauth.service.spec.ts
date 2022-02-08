import { TestBed } from '@angular/core/testing';

import { TwofactorauthService } from './twofactorauth.service';

describe('TwofactorauthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwofactorauthService = TestBed.get(TwofactorauthService);
    expect(service).toBeTruthy();
  });
});
