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
import { ScaleLoader } from "react-spinners";
import notFoundImg from "../../image/not-found.svg"
function SeriesCard() {
  const { series, setStoredSeries, storedSeries, error } =
    useContext(DataContext);
  const identifier = series.results;
  const imageUrl = `https://image.tmdb.org/t/p/original`;
  if (error) {
    return <div className="msg-container">
      <h1>Error: {error.message}</h1>
    </div>
  }
  if (series.length === 0) {
    return (
      <div className="msg-container">
        <ScaleLoader
          className="loader-animation"
          color="#92A2D0"
          height={50}
          radius={20}
        />
      </div>
    );
  } else if (!series) {
     return (
      <div className="msg-container">
        <img src={notFoundImg} alt="illustration of msg not found" className="msg-container__img" />
        <h1 className="msg-container__title">no data found</h1>
      </div>
    )
  } else if (series.results.length > 0) {
    return (
      <>
        <Grid
          container
          direction="row"
          spacing={2}
          sx={{
            justifyContent: useMediaQuery("(max-width:760px)") ? "center" : "",
            margin: "10px auto",
            width: "80%",
          }}
        >
          {series.results.map((element, index) => {
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
                    alt={"Thumbnail of " + element.name}
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
                      {element.name}
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
                      token={index}
                      uniquePara={element.id}
                      setData={setStoredSeries}
                      identifier={identifier}
                      data={storedSeries}
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

export default SeriesCard;
