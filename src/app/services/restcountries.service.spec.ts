import { TestBed } from '@angular/core/testing';

import { RestcountriesService } from './restcountries.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('RestcountriesService', () => {
  let service: RestcountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }).compileComponents();
    service = TestBed.inject(RestcountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
