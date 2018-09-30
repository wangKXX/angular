import { TestBed, inject } from '@angular/core/testing';

import { FacecheckService } from './facecheck.service';

describe('FacecheckService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacecheckService]
    });
  });

  it('should be created', inject([FacecheckService], (service: FacecheckService) => {
    expect(service).toBeTruthy();
  }));
});
