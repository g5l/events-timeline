import TimelineEvent from 'components/TimelineEvent/TimelineEvent';
import TimelineGrid from 'components/TimelineGrid/TimelineGrid';
import {calculateContentDimensions} from "services/timelineService";
import {TimelineEventType} from 'types';
import './styles.css';
import {toPx} from "utils/style";

interface TimelineContentProps {
  events: TimelineEventType[];
  dates: Date[];
  dayWidth: number;
}

const TimelineContent = ({events, dates, dayWidth}: TimelineContentProps) => {
  const {width, height} = calculateContentDimensions(events, dates, dayWidth);
  return (
    <div
      className="content"
      style={{
        width: toPx(width),
        height: toPx(height)
      }}
    >
      <TimelineGrid dates={dates} dayWidth={dayWidth}/>
      {events.map((event) => (
        <TimelineEvent key={event.id} event={event}/>
      ))}
    </div>
  );
};

export default TimelineContent;