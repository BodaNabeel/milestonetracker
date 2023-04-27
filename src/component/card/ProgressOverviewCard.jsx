import React, { useContext } from "react";
import { DataContext } from "../../data/DataContext";
import DoughnutChart from "../DoughnutChart";
export default function ProgressOverviewCard() {
  const { CompletedPendingData } = useContext(DataContext);
  const keys = Object.keys(CompletedPendingData);
  return (
    <div
      className="ProgressOverviewCard-Container"
      style={
        {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          
        
        }
      }
    >
      {keys.map((el) => {
        return (
          <div
            key={el}
            className="ProgressOverviewCard"
            style={{
              border: "1px solid red",
              height: "450px",
              width: "360px",
              margin: "15px 0",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1
              className="ProgressOverviewCard-title"
              style={{
                height: "2%",
              }}
            >
              {CompletedPendingData[el].title}
            </h1>
            {/* <div
              className="ProgressOverviewCard-content"
              style={
                {
                  // height: "mac-co"
                }
              }
            > */}
            <DoughnutChart
              completed={CompletedPendingData[el].completed}
              pending={CompletedPendingData[el].pending}
            />
            <button
              className="ProgressOverviewCard-btn"
              style={{
                alignSelf: "flex-end",
                marginRight: "12px",
              }}
            >
              Details
            </button>
            {/* </div> */}
          </div>
        );
      })}
    </div>
  );
}
