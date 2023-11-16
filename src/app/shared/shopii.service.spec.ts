import { TestBed } from '@angular/core/testing';

import { ShopiiService } from './shopii.service';

describe('ShopiiService', () => {
  let service: ShopiiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopiiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
