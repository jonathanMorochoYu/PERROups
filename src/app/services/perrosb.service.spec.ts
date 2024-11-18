import { TestBed } from '@angular/core/testing';

import { PerrosbService } from './perrosb.service';

describe('PerrosbService', () => {
  let service: PerrosbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerrosbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
