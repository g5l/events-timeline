import config from "config";
import {TimelineEventType} from 'types';
import './styles.css';
import {toPx} from "utils/style";

interface TimelineEventProps {
  event: TimelineEventType;
}

const TimelineEvent = ({event}: TimelineEventProps) => {
  const height = config.timeline.event.height;
  const top = event.lane * (height + config.timeline.event.gap);
  return (
    <div
      className="event-container"
      style={{
        height: toPx(height),
        left: toPx(event.startX),
        top: toPx(top),
        width: toPx(event.width)
      }}
    >
      <div className="event-name">{event.name}</div>
    </div>
  );
};

export default TimelineEvent;