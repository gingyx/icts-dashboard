import { TestBed } from '@angular/core/testing';

import { DocRecordService } from './doc-record.service';

describe('DocRecordService', () => {
  let service: DocRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
