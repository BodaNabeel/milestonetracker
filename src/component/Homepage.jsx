import React, { useState } from "react";
import LogInFunction from "./LogInFunction";
import MovingText from "react-moving-text";
import arrowImage from "../image/arrow.png"
export default function Homepage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        background: "black"
      }}
      className="main-txt"
    >
      {/* <h1>track all your movies, series and books at one place</h1> */}
      <h1 className="main-text">easy way to <span className="highlight">track</span> all your books</h1>
      
      <LogInFunction />
    </div>
  );
}
