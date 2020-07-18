/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoggingInterceptorService } from './logging-interceptor.service';

describe('Service: LoggingInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggingInterceptorService]
    });
  });

  it('should ...', inject([LoggingInterceptorService], (service: LoggingInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
