import { TestBed } from '@angular/core/testing';

import { RestApiCarRentService } from './rest-api-car-rent.service';

describe('RestApiCarRentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestApiCarRentService = TestBed.get(RestApiCarRentService);
    expect(service).toBeTruthy();
  });
});
