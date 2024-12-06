import {render} from '@testing-library/react';
import TimelineContent from 'components/TimelineContent/TimelineContent';
import TimelineEvent from 'components/TimelineEvent/TimelineEvent';
import TimelineGrid from 'components/TimelineGrid/TimelineGrid';
import config from "config";
import {calculateContentDimensions} from "services/timelineService";
import {mockDates, mockEvents} from "tests/mocks/timelineMock";
import {toPx} from "utils/style";

jest.mock('components/TimelineEvent/TimelineEvent', () => {
  return jest.fn(() => <div data-testid="timeline-event"/>);
});

jest.mock('components/TimelineGrid/TimelineGrid', () => {
  return jest.fn(() => <div data-testid="timeline-grid"/>);
});

describe('TimelineContent', () => {
  const dayWidth = config.timeline.day.width;

  beforeEach(() => {
    (TimelineEvent as jest.Mock).mockClear();
    (TimelineGrid as jest.Mock).mockClear();
  });

  it('should renders correct number of TimelineEvent components', () => {
    render(
      <TimelineContent
        events={mockEvents}
        dates={mockDates}
        dayWidth={dayWidth}
      />
    );

    expect(TimelineEvent).toHaveBeenCalledTimes(mockEvents.length);
  });

  it('should renders without events', () => {
    render(
      <TimelineContent
        events={[]}
        dates={mockDates}
        dayWidth={dayWidth}
      />
    );

    expect(TimelineEvent).not.toHaveBeenCalled();
    expect(TimelineGrid).toHaveBeenCalled();
  });

  it('should applies correct width and height styles', () => {
    const {container} = render(
      <TimelineContent
        events={mockEvents}
        dates={mockDates}
        dayWidth={dayWidth}
      />
    );

    const contentDiv = container.firstChild as HTMLElement;
    const {width, height} = calculateContentDimensions(mockEvents, mockDates, dayWidth)
    expect(contentDiv).toHaveStyle({
      width: toPx(width),
      height: toPx(height)
    });
  });
});