import { TestBed } from '@angular/core/testing';

import { RestApiTaxiService } from './rest-api-taxi.service';

describe('RestApiTaxiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestApiTaxiService = TestBed.get(RestApiTaxiService);
    expect(service).toBeTruthy();
  });
});
