import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
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
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarCustom({ data, style, height }) {
  const barOptions = {
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
    <div className={`h-72 w-[90%] mx-auto`}>
      <Bar data={data} options={barOptions} className={style} />
    </div>
  );
}

export default BarCustom;
