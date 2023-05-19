import React, { useState } from "react";
import LogInFunction from "./LogInFunction";

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
        background: "black",
      }}
      className="main-txt"
    >
      <h1 className="main-text">
        easy way to <span className="highlight">track</span> all your books
      </h1>

      <LogInFunction />
    </div>
  );
}
