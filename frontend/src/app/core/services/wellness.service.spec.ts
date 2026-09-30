import { WellnessService } from './wellness.service';
import { ApiService } from './api.service';

describe('WellnessService', () => {
  let service: WellnessService;

  beforeEach(() => {
    const api = { get: jasmine.createSpy('get') } as unknown as ApiService;
    service = new WellnessService(api);
  });

  it('returns the complete talk-to-someone pathway in order', () => {
    const pathways = service.recommend('I need someone to talk to.');

    expect(pathways.map((pathway) => pathway.label)).toEqual([
      'Available Peer Counselor',
      'Professional Counselling',
      'Wellness Resources',
      'Virtual Support',
      'Urgent Help'
    ]);
    expect(pathways.map((pathway) => pathway.route)).toEqual([
      '/student/peer-counselors',
      '/student/appointments',
      '/student/resources',
      '/virtual-support',
      '/student/urgent-help'
    ]);
    expect(pathways[0].queryParams).toEqual({ available: true });
  });

  it('matches the talk-to-someone choice without depending on punctuation or case', () => {
    expect(service.recommend('i need someone to talk to!')[0]?.label).toBe('Available Peer Counselor');
  });
});
