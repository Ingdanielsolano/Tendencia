import { TestBed, inject } from '@angular/core/testing';

import { FaceApiService } from './face-api.service';

describe('FaceApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaceApiService]
    });
  });

  it('should be created', inject([FaceApiService], (service: FaceApiService) => {
    expect(service).toBeTruthy();
  }));
});
