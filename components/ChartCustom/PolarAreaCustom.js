import React from "react";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

function PolarAreaCustom({ data, style, height }) {
  const polarAreaOptions = {
    plugins: {
      legend: {},
      title: {
        display: false,
      },
    },
    scales: {},
    elements: {
      bar: {
        barPercentage: 0.3,
        categoryPercentage: 1,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className={`mx-auto h-72 w-[90%]`}>
      <PolarArea data={data} options={polarAreaOptions} className={style} />
    </div>
  );
}

export default PolarAreaCustom;
