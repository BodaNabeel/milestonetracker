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
function BookCard() {
  const { books, storedBooks, setStoredBooks, error } = useContext(DataContext);
  const vw = useMediaQuery("(max-width:760px)");
  const identifier = books.items;
  if (error) {
    return <h1>Error: {error.message}</h1>;
  }
  if (books?.length === 0) {
    <ScaleLoader
      className="loader-animation"
      color="#92A2D0"
      height={50}
      radius={20}
    />;
  } else if (!books) {
    return <h1>No data found</h1>;
  } else if (books?.items) {
    return (
      <>
        <Grid
          container
          direction="row"
          spacing={2}
          sx={{
            justifyContent: vw ? "center" : "",
            margin: "10px auto",
            width: "80%",
          }}
        >
          {books.items.map((element, index) => {
            return (
              <Grid item key={index} style={{}}>
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
                    <BookmarkButton
                      token={index}
                      uniquePara={element.id}
                      setData={setStoredBooks}
                      data={storedBooks}
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

export default BookCard;
