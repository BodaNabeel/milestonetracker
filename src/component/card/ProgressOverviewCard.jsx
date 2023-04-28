import React, { useContext } from "react";
import { DataContext } from "../../data/DataContext";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import DoughnutChart from "../DoughnutChart";
import { useMediaQuery } from "@mui/material";
export default function ProgressOverviewCard() {
  const { CompletedPendingData } = useContext(DataContext);
  const keys = Object.keys(CompletedPendingData);
  const responsiveCardContainer = useMediaQuery("(min-width:1000px)");
  return (
    <div
      className="ProgressOverviewCard-Container"
      style={{
        display: "flex",
        flexDirection: responsiveCardContainer ? "row" : "column",
        // height: responsiveCardContainer ? "85vh" : "",
        alignItems: "center",
        justifyContent: "space-around",
        // margin: "35px 0"
        marginTop: "40px",

      }}
    >
      {keys.map((el) => {
        return (
          <div
            key={el}
            className="ProgressOverviewCard"
            style={{
              height: "480px",
              width: "70%",
              maxWidth: "320px",
              margin: "15px 0",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0px 0px 10px 5px rgba(166,156,166,1)",
              padding: "10px",
              justifyContent: "space-evenly",
              borderRadius: "12px",
            }}
          >
            <h1
              className="ProgressOverviewCard-title"
              //
            >
              {CompletedPendingData[el].title}
            </h1>

            <DoughnutChart
              completed={CompletedPendingData[el].completed}
              pending={CompletedPendingData[el].pending}
            />
            <button
              className="ProgressOverviewCard-btn"
              style={{
                alignSelf: "flex-end",
                marginRight: "12px",
                border: "none",
                background: "transparent",
                backgroundImage:
                  "linear-gradient(90deg, #fcecfe, #fbf6e7, #e6fcf5)",
                cursor: "pointer",
                borderRadius: "20px",
                padding: "10px 20px",

                display: "flex",
                alignItems: "center",
              }}
            >
              Details
              <ReadMoreIcon
                sx={{
                  marginLeft: "15px",
                }}
              />
            </button>
          </div>
        );
      })}
    </div>
  );
}
