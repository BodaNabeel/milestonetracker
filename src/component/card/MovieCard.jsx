import React, { useContext } from "react";
import { DataContext } from "../../data/DataContext";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import BookmarkButton from "../BookmarkButton";
function MovieCard() {
  const { movies, setStoredMovies, storedMovies } = useContext(DataContext);
  const identifier = movies.results;
  const imageUrl = `https://image.tmdb.org/t/p/original`;
  function MovieRender({ movies }) {
    if (movies.length == 0) {
      return <h1>NO DATA FOUND</h1>;
    } else {
      return (
        <>
          <Grid
            container
            direction="row"
            spacing={2}
            sx={{
              justifyContent: useMediaQuery("(max-width:760px)")
                ? "center"
                : "",
              margin: "10px auto",
              width: "80%",
            }}
          >
            {movies.results.map((element, index) => {
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
                      alt={"Thumbnail of " + element.original_title}
                      image={imageUrl + element.backdrop_path}
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
                        {element.original_title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="text-truncate-para"
                      >
                        {element.overview}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <BookmarkButton
                        uniquePara={element.id}
                        token={index}
                        setData={setStoredMovies}
                        identifier={identifier}
                        data={storedMovies}
                      />
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
  return <MovieRender movies={movies} />;
}

export default MovieCard;
