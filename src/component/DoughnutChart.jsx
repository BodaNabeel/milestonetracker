import React, { useEffect, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

function DoughnutChart({completed, pending}) {
  const data = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        data: [completed,pending],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
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
