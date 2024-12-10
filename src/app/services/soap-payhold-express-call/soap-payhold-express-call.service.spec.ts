import { TestBed } from '@angular/core/testing';

import { SoapPayholdExpressCallService } from './soap-payhold-express-call.service';

describe('SoapPayholdExpressCallService', () => {
  let service: SoapPayholdExpressCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoapPayholdExpressCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
