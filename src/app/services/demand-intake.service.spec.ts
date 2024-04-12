import { TestBed } from '@angular/core/testing';

import { DemandIntakeService } from './demand-intake.service';

describe('DemandIntakeService', () => {
  let service: DemandIntakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandIntakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
