import { TestBed, inject } from '@angular/core/testing';

import { BlackborderService } from './blackborder.service';

describe('BlackborderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlackborderService]
    });
  });

  it('should be created', inject([BlackborderService], (service: BlackborderService) => {
    expect(service).toBeTruthy();
  }));
});
