import React from "react";
import Scrollable from "./Scrollable";

import BookCard from "./card/BookCard";
import MovieCard from "./card/MovieCard";
function DataDisplay() {
  return (
    <>
      <Scrollable />
      <BookCard />
      <MovieCard />
    </>
  );
}

export default DataDisplay;
