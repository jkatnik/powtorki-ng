import { TestBed } from '@angular/core/testing';

import { EmailCheckerService } from './email-checker.service';

describe('EmailCheckerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailCheckerService = TestBed.get(EmailCheckerService);
    expect(service).toBeTruthy();
  });
});
