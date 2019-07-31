/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpiderService } from './spider.service';

describe('Service: Spider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpiderService]
    });
  });

  it('should ...', inject([SpiderService], (service: SpiderService) => {
    expect(service).toBeTruthy();
  }));
});
