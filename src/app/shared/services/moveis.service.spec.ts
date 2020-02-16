import { TestBed } from '@angular/core/testing';

import { MoveisService } from './moveis.service';

describe('MoveisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoveisService = TestBed.get(MoveisService);
    expect(service).toBeTruthy();
  });
});
