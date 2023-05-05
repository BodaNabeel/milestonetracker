import React, { useState } from "react";
import Scrollable from "./Scrollable";
import BookCard from "./card/BookCard";
import MovieCard from "./card/MovieCard";
import SeriesCard from "./card/SeriesCard";
function DataDisplay() {
  const [labelNumber, setLabelNumber] = useState(1);
  const ConditionalRenderingOfData = function () {
    switch (labelNumber) {
      // case 0:
      //   return (
      //     <>
      //       <BookCard />
      //       <MovieCard />
      //       <SeriesCard />
      //     </>
      //   );
      case 1:
        return <BookCard />;
      case 2:
        return <MovieCard />;
      case 3:
        return <SeriesCard />;
    }
  };
  return (
    <>
      <Scrollable setLabelNumber={setLabelNumber} labelNumber={labelNumber} />
      <ConditionalRenderingOfData />
    </>
  );
}

export default DataDisplay;
