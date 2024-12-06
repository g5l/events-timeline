import config from "config";
import React from 'react';
import {convertDateToKey, format, isFirstDayOfMonth} from "utils/date";
import './styles.css';
import {toPx} from "utils/style";

interface TimelineHeaderProps {
  dates: Date[];
  dayWidth: number;
}

const TimelineHeader = ({dates, dayWidth}: TimelineHeaderProps) => (
  <div className="header-container">
    {dates.map((date, index) => {
      const leftSpace = index * dayWidth;
      const style = {left: toPx(leftSpace)};
      return (
        <React.Fragment key={convertDateToKey(date)}>
          {(index === 0 || isFirstDayOfMonth(date)) && (
            <div className="header-month" style={style}>
              {format(date, config.timeline.header.month.format)}
            </div>
          )}
          <div className="header-day" style={style}>
            {format(date, config.timeline.header.day.format)}
          </div>
        </React.Fragment>
      );
    })}
  </div>
);

export default TimelineHeader;