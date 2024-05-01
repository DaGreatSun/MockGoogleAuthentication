import React from "react";
import { Scatter } from "react-chartjs-2";

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

function ScatterCustom({ data, height, options, style }) {
  const scatterOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };
  return (
    <div className={`mx-auto h-72 w-[95%]`}>
      <Scatter options={scatterOptions} data={data} />
    </div>
  );
}

export default ScatterCustom;
