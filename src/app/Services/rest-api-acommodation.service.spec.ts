import { TestBed } from '@angular/core/testing';

import { RestApiAcommodationService } from './rest-api-acommodation.service';

describe('RestApiAcommodationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestApiAcommodationService = TestBed.get(RestApiAcommodationService);
    expect(service).toBeTruthy();
  });
});
