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
      className="homepage"
    >
      <div className="wrapper">
        <p> a single place to track all your </p>
        <div className="words">
          <span> </span>
          <span> books</span>
          <span> series</span>
          <span> movies</span>
        </div>
      </div>

      <LogInFunction />
    </div>
  );
}
