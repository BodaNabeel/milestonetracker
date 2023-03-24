import React, { useContext, useEffect } from "react";
import { DataContext } from "./data/DataStore";
import ScrollableTabsButtonForce from "./Scrollable";

function DataDisplay() {
  const { movies, books } = useContext(DataContext);
  function BooksRender({ books }) {
    if (books.length === 0) {
      return <h1>NO DATA FOUND</h1>;
    } else {
      return (
        <>
          {books.items.map((element, index) => {
            return <h1 key={index}>{element.volumeInfo.title}</h1>;
          })}
        </>
      );
    }
  }

  return (
    <>
      <ScrollableTabsButtonForce />
      {<BooksRender books={books} />}
    </>
  );
}

export default DataDisplay;
