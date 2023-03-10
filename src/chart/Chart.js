import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css'
const Chart = (props) => {
 const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
console.log('what is here', props.dataPoints);
  return (
    <div className="chart mb-4">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
