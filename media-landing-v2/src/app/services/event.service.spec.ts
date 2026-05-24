import { TestBed } from '@angular/core/testing';
import { EventService } from './event.service';
import { SupabaseService } from './supabase.service';

// Provide a lightweight mock for SupabaseService client usage
class SupabaseServiceMock {
  client: any = {
    from: () => ({
      select: () => ({
        order: () => Promise.resolve({ data: [], error: null }),
      }),
      eq: () => ({
        single: () => Promise.resolve({ data: null, error: null }),
      }),
      insert: () => ({
        select: () => ({
          single: () => Promise.resolve({ data: null, error: null }),
        }),
      }),
      update: () => ({
        eq: () => ({
          select: () => ({
            single: () => Promise.resolve({ data: null, error: null }),
          }),
        }),
      }),
      delete: () => ({
        eq: () => Promise.resolve({ data: null, error: null }),
      }),
      gte: () => ({ order: () => Promise.resolve({ data: [], error: null }) }),
      lt: () => ({ order: () => Promise.resolve({ data: [], error: null }) }),
      order: () => Promise.resolve({ data: [], error: null }),
    }),
  };
}

describe('EventService', () => {
  let service: EventService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EventService,
        { provide: SupabaseService, useClass: SupabaseServiceMock },
      ],
    });
    service = TestBed.inject(EventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should expose list method', () => {
    expect(typeof service.list).toBe('function');
  });
});
