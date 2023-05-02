import React from "react";
import { useParams } from "react-router-dom";

function DetailedTracking() {
    // Getting the params which will be used to condtionally render data in UI
  const routeParams = useParams();
  return (
    <>
      <div>DetailedTracking {routeParams.id} </div>
    </>
  );
}

export default DetailedTracking;
