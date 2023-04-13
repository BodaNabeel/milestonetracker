import React, { useContext } from "react";
import { DataContext } from "../../data/DataContext";
import DoughnutChart from "../DoughnutChart";
export default function ProgressOverviewCard() {
  const { CompletedPendingData } = useContext(DataContext);
  const keys = Object.keys(CompletedPendingData);
  return (
    <div className="ProgressOverviewCard-Container">
      {keys.map((el) => {
        return (
          <div
            key={el}
            className="ProgressOverviewCard"
            style={{ border: "1px solid red" }}
          >
            <h1 className="ProgressOverviewCard-title">
              {CompletedPendingData[el].title}
            </h1>
            <div className="ProgressOverviewCard-content">
              <DoughnutChart
                completed={CompletedPendingData[el].completed}
                pending={CompletedPendingData[el].pending}
              />
              <button className="ProgressOverviewCard-btn">Details</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
