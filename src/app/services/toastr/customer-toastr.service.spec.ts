import { TestBed } from '@angular/core/testing';

import { CustomerToastrService } from './customer-toastr.service';

describe('CustomerToastrService', () => {
  let service: CustomerToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerToastrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
