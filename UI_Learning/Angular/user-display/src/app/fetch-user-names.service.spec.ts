import { TestBed } from '@angular/core/testing';

import { FetchUserNamesService } from './fetch-user-names.service';

describe('FetchUserNamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchUserNamesService = TestBed.get(FetchUserNamesService);
    expect(service).toBeTruthy();
  });
});
