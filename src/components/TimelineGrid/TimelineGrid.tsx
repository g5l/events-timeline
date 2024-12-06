import './styles.css';
import {convertDateToKey} from "utils/date";

interface TimelineGridProps {
  dates: Date[];
  dayWidth: number;
}

const TimelineGrid = ({dates, dayWidth}: TimelineGridProps) => (
  <div className="grid-container">
    {dates.map((date, index) => (
      <div
        key={convertDateToKey(date)}
        className="grid-line"
        style={{left: `${index * dayWidth}px`}}
      />
    ))}
  </div>
);

export default TimelineGrid;