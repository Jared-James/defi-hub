import { useRef, useEffect, useState } from "react";
import styles from "./chart.module.css";

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

const ShowChart = ({ info, BTC }) => {
  const chartRef = useRef();

  useEffect(() => {
    const { day } = info;
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
    <div className={styles.chart_container}>
      <h3 className={styles.title}>Daily price Change</h3>
      <div className={styles.chart}>
        <canvas
          ref={chartRef}
          className={styles.chart}
          id="myChart"
          width={300}
          height={500}
        ></canvas>
      </div>
      {/* <div className={styles.chartBottom}>Hello</div> */}
    </div>
  );
};

export default ShowChart;
