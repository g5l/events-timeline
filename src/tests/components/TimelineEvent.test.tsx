import {render, screen} from '@testing-library/react';
import TimelineEvent from 'components/TimelineEvent/TimelineEvent';
import config from "config";
import {mockEvent} from "tests/mocks/timelineMock";
import {toPx} from "utils/style";

describe('TimelineEvent', () => {
  const event = mockEvent();

  it('should renders event name correctly', () => {
    render(<TimelineEvent event={event}/>);
    expect(screen.getByText(event.name)).toBeInTheDocument();
  });

  it('should applies correct positioning styles', () => {
    const {container} = render(<TimelineEvent event={event}/>);
    const eventDiv = container.firstChild as HTMLElement;
    const height = config.timeline.event.height;
    const gap = config.timeline.event.gap;

    expect(eventDiv).toHaveStyle({
      left: toPx(event.startX),
      top: toPx(event.lane * (height + gap)),
      width: toPx(event.width)
    });
  });
});