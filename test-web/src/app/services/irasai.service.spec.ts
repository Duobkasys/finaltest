import { TestBed } from '@angular/core/testing';

import { IrasaiService } from './irasai.service';

describe('IrasaiService', () => {
  let service: IrasaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IrasaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
