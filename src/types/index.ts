export interface EventType {
  id: number;
  start: string;
  end: string;
  name: string;
}

export interface TimelineEventType extends EventType {
  lane: number;
  startX: number;
  width: number;
}