import React, { useContext } from "react";
import { DataContext } from "../../data/DataContext";

function MovieCard() {
  const { movie, series } = useContext(DataContext);
  return <div>MovieCard</div>;
}

export default MovieCard;
