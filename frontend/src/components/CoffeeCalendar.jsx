import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import ReactTooltip from "react-tooltip";

const CoffeeCalendar = () => {
  const today = new Date();

  return (
    <div className="calendar-heatmap">
      <CalendarHeatmap
        startDate={shiftDate(today, -90)}
        endDate={today}
        values={[0]}
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

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

export default CoffeeCalendar;
