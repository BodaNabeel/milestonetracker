import React, { useEffect, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

function DoughnutChart({ completed, pending }) {
  Chart.register(ChartDataLabels);
  const data = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        data: [completed, pending],
        backgroundColor: ["#4464A8", "#92A2D0"],
        hoverBackgroundColor: ["#4464A8", "#92A2D0"],
        // TODO: use radius property to set it's height and length

        // TODO: show completion %age in the center
        // ex: radius: "40%"
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: "85%",
    plugins: {
      legend: {
        display: false,
        onClick: null,
      },
      datalabels: {
        color: "white",
        font: {
          size: 14,
          weight: 600,
        },
      },
    },
  };

  return (
    <div>
      <div id={1} className="chart-container">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}

export default DoughnutChart;
