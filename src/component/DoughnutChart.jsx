import React, { useEffect, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

function DoughnutChart({ completed, pending, total }) {
 const completionPercentage = Math.round((completed/total)*100)
  const plugins = [{
    beforeDraw: function(chart) {
     var width = chart.width,
         height = chart.height,
         ctx = chart.ctx;
         ctx.restore();
        //  var fontSize = (height / 160).toFixed(2);
        var fontSize = 2;
         ctx.font = fontSize + "em sans-serif";
         ctx.textBaseline = "top";
        //  var text = `(${completed}(${completed+pending}))*100`,
        // var text = completed/(completed+pending)*100,
        var text = `${completionPercentage}%`,
         textX = Math.round((width - ctx.measureText(text).width) / 2),
         textY = height / 2;
         ctx.fillText(text, textX, textY);
         ctx.save();
    } 
  }]

  Chart.register(ChartDataLabels);
  const data = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        data: [completed, pending],
        backgroundColor: ["#4464A8", "#92A2D0"],
        hoverBackgroundColor: ["#4464A8", "#92A2D0"],
        // TODO: use radius property to set it's height and length
        // ex: radius: "40%"
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: "80%",
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
        <Doughnut data={data} options={options} plugins={plugins} />
      </div>
    </div>
  );
}

export default DoughnutChart;
