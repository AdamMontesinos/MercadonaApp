import { TestBed } from '@angular/core/testing';

import { BBDDService } from './bbdd.service';

describe('BBDDService', () => {
  let service: BBDDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BBDDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
