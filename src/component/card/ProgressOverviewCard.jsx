import React, { useContext } from "react";
import { DataContext } from "../../data/DataContext";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import DoughnutChart from "../DoughnutChart";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function ProgressOverviewCard() {
  const navigate = useNavigate();
  const { CompletedPendingData } = useContext(DataContext);
  const keys = Object.keys(CompletedPendingData);
  const responsiveCardContainer = useMediaQuery("(min-width:1000px)");

  return (
    <div
      className="ProgressOverviewCard-Container"
      style={{
        display: "flex",
        flexDirection: responsiveCardContainer ? "row" : "column",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: "40px",
      }}
    >
      {keys.map((el) => {
        const completionPercentage = Math.round(
          (CompletedPendingData[el].completed /
            CompletedPendingData[el].total) *
            100
        );
        const percentage = isNaN(completionPercentage)
          ? "no record added..."
          : `${completionPercentage}%`;

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
            <h1 className="ProgressOverviewCard-title">
              {CompletedPendingData[el].title}
            </h1>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                padding: 0,
                margin: 0,
              }}
            >
              <DoughnutChart
                completed={CompletedPendingData[el].completed}
                pending={CompletedPendingData[el].pending}
                total={CompletedPendingData[el].total}
              />
              <h5
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-150%)",
                  fontSize: "1.5rem"
                }}
              >
                {percentage}
              </h5>
            </div>
            <button
              onClick={() =>
                navigate(`/tracking/${CompletedPendingData[el].title.toLowerCase()}`)
              }
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
