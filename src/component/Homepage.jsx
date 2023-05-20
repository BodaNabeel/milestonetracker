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
          <span className="words_text"> </span>
          <span className="words_text"> books</span>
          <span className="words_text"> series</span>
          <span className="words_text"> movies</span>
        </div>
      </div>

      <LogInFunction />
    </div>
  );
}
