import { TestBed } from '@angular/core/testing';

import { MaintainService } from './maintain.service';

describe('MaintainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaintainService = TestBed.get(MaintainService);
    expect(service).toBeTruthy();
  });
});
