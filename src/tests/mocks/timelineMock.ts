import {TimelineEventType} from "types";

interface MockEventConfig {
  id?: number;
  name?: string;
  start?: string;
  end?: string;
  lane?: number;
  startX?: number;
  width?: number;
}

export const mockEvent = (config: MockEventConfig = {}): TimelineEventType => ({
  id: 1,
  name: 'Test Event',
  start: '2021-01-01',
  end: '2021-01-05',
  lane: 2,
  startX: 100,
  width: 150,
  ...config
});

export const mockEvents: TimelineEventType[] = [
  mockEvent({ id: 1, name: 'Event 1', lane: 0, startX: 0, width: 100 }),
  mockEvent({ id: 2, name: 'Event 2', lane: 1, startX: 30, width: 150, start: '2021-01-02', end: '2021-01-08' })
];

export const mockDates = [
  new Date('2021-01-01'),
  new Date('2021-01-02'),
  new Date('2021-01-03')
];
