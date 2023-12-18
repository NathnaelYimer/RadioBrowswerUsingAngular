import { TestBed } from '@angular/core/testing';

import { RadiobrowserService } from './radiobrowser.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('RadiobrowserService', () => {
  let service: RadiobrowserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }).compileComponents();
    service = TestBed.inject(RadiobrowserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
