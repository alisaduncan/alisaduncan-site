import { TestBed } from '@angular/core/testing';

import { DevCommunityService } from './dev-community.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DevCommunityService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: DevCommunityService = TestBed.get(DevCommunityService);
    expect(service).toBeTruthy();
  });
});
