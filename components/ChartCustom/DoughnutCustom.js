import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
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
  Title,
  Tooltip,
  Legend
);

function DoughnutCustom({ data, style, height }) {
  const doughnutOptions = {
    maintainAspectRatio: false,
    aspectRatio: 1.1,
    cutout: "60%",
    rotation: 0,
    circumference: 360,
    borderRadius: 3,
    offset: 3,
  };
  return (
    <div className={`relative flex justify-center mx-auto h-72 w-[95%]`}>
      <Doughnut
        redraw
        data={data}
        options={doughnutOptions}
        className={style}
      />
    </div>
  );
}

export default DoughnutCustom;
