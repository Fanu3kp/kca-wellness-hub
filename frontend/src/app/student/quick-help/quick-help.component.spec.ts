import { QuickHelpComponent } from './quick-help.component';
import { WellnessService } from '../../core/services/wellness.service';
import { Router } from '@angular/router';

describe('QuickHelpComponent', () => {
  it('offers the talk-to-someone choice and its ordered pathway', () => {
    const wellnessService = {
      recommend: jasmine.createSpy('recommend').and.returnValue([
        { id: 'available-peer', label: 'Available Peer Counselor', route: '/student/peer-counselors' }
      ])
    } as unknown as WellnessService;
    const component = new QuickHelpComponent(wellnessService, {} as Router);

    expect(component.concerns).toContain('I need someone to talk to.');
    component.selectConcern('I need someone to talk to.');
    expect(component.recommendations[0]?.label).toBe('Available Peer Counselor');
  });
});
