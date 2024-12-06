import config from 'config';
import {addDays, eachDayOfInterval, subDays} from 'date-fns';
import {EventType, TimelineEventType} from 'types';
import {calculateDaysBetween, format, parseDate} from 'utils/date';

interface ProcessEventsType {
  processedEvents: TimelineEventType[],
  dates: Date[]
}

export const processEvents = (events: EventType[], dayWidth: number): ProcessEventsType => {
  if (!events.length) return {processedEvents: [], dates: []};

  const startDates = events.map(e => parseDate(e.start));
  const endDates = events.map(e => parseDate(e.end));
  const minDate = new Date(Math.min(...startDates.map(d => d.getTime())));
  const maxDate = new Date(Math.max(...endDates.map(d => d.getTime())));

  const paddedStartDate = subDays(minDate, config.timeline.pad);
  const paddedEndDate = addDays(maxDate, config.timeline.pad);
  const paddedStartDateFormatted = format(new Date(paddedStartDate), config.date.format);

  const dates = eachDayOfInterval({start: paddedStartDate, end: paddedEndDate});

  const processedEvents = calculateLanes(events).map(event => ({
    ...event,
    startX: calculateDaysBetween(paddedStartDateFormatted, event.start) * dayWidth,
    width: calculateDaysBetween(event.start, event.end) * dayWidth
  }));

  return {processedEvents, dates};
};

const calculateLanes = (events: EventType[]): TimelineEventType[] => {
  const sortedEvents = [...events].sort((a, b) =>
    parseDate(a.start).getTime() - parseDate(b.start).getTime()
  );

  const lanes: TimelineEventType[][] = [];
  const processedEvents: TimelineEventType[] = [];

  sortedEvents.forEach(event => {
    let placed = false;
    let laneIndex = 0;

    while (!placed) {
      if (!lanes[laneIndex]) {
        lanes[laneIndex] = [];
        placed = true;
      } else {
        const lastEvent = lanes[laneIndex][lanes[laneIndex].length - 1];
        if (parseDate(event.start) >= parseDate(lastEvent.end)) {
          placed = true;
        } else {
          laneIndex++;
        }
      }
    }

    const timelineEvent: TimelineEventType = {
      ...event,
      lane: laneIndex,
      startX: 0,
      width: 0
    };

    lanes[laneIndex].push(timelineEvent);
    processedEvents.push(timelineEvent);
  });

  return processedEvents;
};

export const calculateContentDimensions = (events: TimelineEventType[], dates: Date[], dayWidth: number) => {
  const highestLane = events.length ? Math.max(...events.map(item => item.lane)) : 0;
  const height = highestLane * (config.timeline.event.height + config.timeline.event.gap) + 50;
  const width = dates.length * dayWidth;

  return { height, width };
};