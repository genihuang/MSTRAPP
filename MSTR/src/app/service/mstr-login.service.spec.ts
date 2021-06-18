import { TestBed } from '@angular/core/testing';

import { MstrLoginService } from './mstr-login.service';

describe('MstrLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MstrLoginService = TestBed.get(MstrLoginService);
    expect(service).toBeTruthy();
  });
});
