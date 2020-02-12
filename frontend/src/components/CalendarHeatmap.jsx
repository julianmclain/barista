import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import ReactTooltip from "react-tooltip";

const calendarHeatmap = () => {
  const today = new Date();

  const randomValues = getRange(200).map(index => {
    return {
      date: shiftDate(today, -index),
      count: getRandomInt(1, 3)
    };
  });

  return (
    <div className="calendar-heatmap">
      <CalendarHeatmap
        startDate={shiftDate(today, -90)}
        endDate={today}
        values={randomValues}
        classForValue={value => {
          if (!value) {
            return "color-empty";
          }
          return `color-github-${value.count}`;
        }}
        tooltipDataAttrs={value => {
          return {
            "data-tip": `${value.date.toISOString().slice(0, 10)} has count: ${
              value.count
            }`
          };
        }}
        showWeekdayLabels={true}
      />
      <ReactTooltip />
      <p data-tip="hello world">*showing last 90 day time period</p>
    </div>
  );
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRange(count) {
  return Array.from({ length: count }, (_, i) => i);
}

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

export default calendarHeatmap;
