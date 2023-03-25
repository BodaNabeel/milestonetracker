import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { DataContext } from "./data/DataStore";
import ScrollableTabsButtonForce from "./Scrollable";

function DataDisplay() {
  const { movies, books, series } = useContext(DataContext);
  function MoviesRender({ movies }) {
    // movies.length !== 0 ? console.log(movies) : 0;
    // console.log(movies)
  }
  function SeriesRender({ series }) {
    // series.length !== 0 ? console.log(series) : 0;
  }
  function BooksRender({ books }) {
    if (books.length === 0) {
      return <h1>NO DATA FOUND</h1>;
    } else {
      console.log(books);
      return (
        <>
          {books.items.map((element, index) => {
            return (
              <Card key={index} sx={{ maxWidth: 350, height: 350 }}>
                <CardMedia
                  component="img"
                  alt={"thumbnail of " + element.volumeInfo.title}
                  sx={{ width: "100%", height: "auto" }}
                  image={element.volumeInfo.imageLinks.smallThumbnail}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {element.volumeInfo.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {element.volumeInfo.subtitle}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            );
          })}
        </>
      );
    }
  }

  return (
    <>
      <ScrollableTabsButtonForce />
      <div className="book-container">{<BooksRender books={books} />}</div>
      <div className="movie-conatiner">{<MoviesRender movies={movies} />}</div>
      <div className="series-container">{<SeriesRender series={series} />}</div>
    </>
  );
}

export default DataDisplay;
