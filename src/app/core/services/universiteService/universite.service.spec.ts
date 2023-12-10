/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UniversiteService } from './universite.service';

describe('Service: UniversiteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniversiteService]
    });
  });

  it('should ...', inject([UniversiteService], (service: UniversiteService) => {
    expect(service).toBeTruthy();
  }));
});
