import React from "react";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

function LineCustom({ data, height, options, style }) {
  const lineOptions = {
    // maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
    },
    elements: {
      line: {
        tension: 0,
        borderWidth: 2,
        borderColor: options.borderColor,
        fill: "start",
        backgroundColor: options.backgroundColor,
      },
      point: {
        radius: 5,
        hitRadius: 0,
        hoverBackgroundColor: options.hoverBackgroundColor,
        hoverRadius: 7,
      },
    },
    scales: {
      x: {
        display: true,
      },
      y: {
        display: true,
        suggestedMin: 18,
        suggestedMax: 10,
        ticks: {
          stepSize: 1,
          beginAtZero: true,
        },
      },
    },
    maintainAspectRatio: false,
  };
  return (
    <div className={`mx-auto h-72 w-[95%]`}>
      <Line data={data} options={lineOptions} className={style} />
    </div>
  );
}

export default LineCustom;
