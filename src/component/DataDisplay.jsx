import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { DataContext } from "../data/DataStore";
import ScrollableTabsButtonForce from "./Scrollable";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
function DataDisplay() {
  const { movies, books, series } = useContext(DataContext);

  function MoviesRender({ movies }) {}
  function SeriesRender({ series }) {}
  function BooksRender({ books }) {
    if (books.length === 0) {
      return <h1>NO DATA FOUND</h1>;
    } else {
      return (
        <>
          <Grid
            container
            direction="row"
            spacing={2}
            my={4}
            justifyContent="center"
            sx={{
              justifyContent: useMediaQuery("(max-width:476px)")
                ? "center"
                : "start",
            }}
          >
            {books.items.map((element, index) => {
              return (
                <Grid item key={index}>
                  <Card
                    sx={{
                      display: "flex",
                      height: "460px",
                      width: "230px",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt={"Thumbnail of " + element.volumeInfo.title}
                      image={
                        element.volumeInfo.imageLinks === undefined
                          ? ""
                          : element.volumeInfo.imageLinks.thumbnail
                      }
                      sx={{
                        width: "100%",
                        maxWidth: "200px",
                        height: "300px",
                        objectFit: "fill",
                        alignSelf: "center",
                      }}
                    />

                    <CardContent
                      sx={{
                        width: "100%",
                        maxWidth: "200px",
                        flexGrow: 1,
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{}}
                        className="text-truncate"
                      >
                        {element.volumeInfo.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="text-truncate-para"
                      >
                        {element.volumeInfo.subtitle}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      {/* TODO: Dynamically switching between icons and text */}
                      <Button size="small">
                        <TurnedInNotIcon /> Add to list
                      </Button>
                      {/* <Button size="small"><TurnedInIcon/> Remove from list</Button> */}
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </>
      );
    }
  }

  return (
    <>
      <ScrollableTabsButtonForce />

      <BooksRender books={books} />
      <div className="movie-conatiner">{<MoviesRender movies={movies} />}</div>
      <div className="series-container">{<SeriesRender series={series} />}</div>
    </>
  );
}

export default DataDisplay;
