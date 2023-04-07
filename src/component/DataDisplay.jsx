import React from "react";
import Scrollable from "./Scrollable";

import BookCard from "./card/BookCard";
import MovieCard from "./card/MovieCard";
import SeriesCard from "./card/SeriesCard";
function DataDisplay() {
  return (
    <>
      <Scrollable />
      {/* <BookCard /> */}
      {/* <MovieCard /> */}
      <SeriesCard/>
    </>
  );
}

export default DataDisplay;
