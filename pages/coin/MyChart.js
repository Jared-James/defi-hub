import { useRef, useEffect, useState } from "react";

import Chart from "chart.js/auto";

const historyOption = {
  lineHeightAnnotation: {
    always: true,
    hover: false,
    lineWeight: 1.5,
  },
  animation: {
    duration: 2000,
  },
  maintainAspectRation: false,
  responsive: true,
  scales: {
    xAxes: [{ type: "time", distribution: "linear" }],
  },
};

const MyChart = ({ info, BTC }) => {
  const { day } = info;


  const chartRef = useRef();

  console.log(info);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      let myChart = new Chart(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `${BTC} Price`,
              data: day,
              pointRadius: 1,
              backgroundColor: "rgba(174, 305, 194, 0.5)",
              borderColor: "rgba(174, 305, 194, 0.4",
              borderWidth: 1,
              fill: true,
            },
          ],
        },
        options: {
          ...historyOption,
        },
      });
    }
  }, []);

  return (
    <div>
        <h3 className="title">Daily price Change</h3>
      <canvas ref={chartRef} id="myChart" width={100} height={78}></canvas>
    </div>
  );
};

export default MyChart;
