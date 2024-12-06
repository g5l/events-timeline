import TimelineContent from "components/TimelineContent/TimelineContent";
import TimelineHeader from "components/TimelineHeader/TimelineHeader";
import config from "config";
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {processEvents} from 'services/timelineService';
import {EventType, TimelineEventType} from 'types';
import './styles.css';

interface TimelineProps {
  events: EventType[];
  onEventUpdate?: (event: EventType) => void;
}

const Timeline: React.FC<TimelineProps> = ({events, onEventUpdate}) => {
  const [timelineEvents, setTimelineEvents] = useState<TimelineEventType[]>([]);
  const [timelineDates, setTimelineDates] = useState<Date[]>([]);
  const [zoom, setZoom] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const dayWidth = useMemo(() => config.timeline.day.width * zoom, [zoom]);

  useEffect(() => {
    const {processedEvents, dates} = processEvents(events, dayWidth);
    setTimelineEvents(processedEvents);
    setTimelineDates(dates);
  }, [events, zoom, dayWidth]);

  const handleWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey) {
      e.preventDefault();
      const newZoom = Math.max(0.5, Math.min(2, zoom + (e.deltaY > 0 ? -0.1 : 0.1)));
      setZoom(newZoom);
    }
  };

  return (
    <div className="timeline-wrapper">
      <div
        className="timeline-container"
        onWheel={handleWheel}
        ref={containerRef}
      >
        <div className="timeline-scroll">
          <TimelineHeader dates={timelineDates} dayWidth={dayWidth}/>
          <TimelineContent
            events={timelineEvents}
            dates={timelineDates}
            dayWidth={dayWidth}
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;