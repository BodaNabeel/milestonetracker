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

function SeriesCard() {
  const { series, setStoredSeries } = useContext(DataContext);
  const identifier = series.results;
  const imageUrl = `https://image.tmdb.org/t/p/original`;
  function SeriesRender({ series }) {
    if (series.length == 0) {
      return <h1>NO DATA FOUND</h1>;
    } else {
      return (
        <>
          <Grid
            container
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{
              justifyContent: useMediaQuery("(max-width:476px)")
                ? "center"
                : "",
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
  return <SeriesRender series={series} />;
}

export default SeriesCard;
