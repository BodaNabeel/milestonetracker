import React, { useRef, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../data/DataContext";
import BookCard from "./BookCard";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
// TODO: Build the structure for this compoenent which renders for all movies, books, series along all functionalitites like mark as completed, incompleted, remove from the list
// TODO: Then look into the error related to sending cookie in a cross-site

function DataRender({ data, parameter, list, setList }) {
  const [tempData, setTempData] = useState([]);
  const [first, setFirst] = useState()

  const test = (e,d,i) => {
    // console.log(e)
    // console.log(d)
    // console.log(i)
    // console.log(d[i])
    setTempData(d[i].id);
    // console.log(tempData)
  }
  const toggleCompletedList = () => {

  }
  const { markedCompleted, setMarkedCompleted } = useContext(DataContext);
  const ref = useRef()
  const [isChecked, setIsChecked] = useState(false);
  if (data.length === 0) {
    return <h1>NO DATA FOUND</h1>;
  } else {
    return (
      <>
        <div
          style={{
            padding: "12px 0",
            width: "100%",

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {data.map((element, index) => {
            return (
              <Grid item key={index} style={{}}>
                <Card
                ref={ref}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    margin: "12px 0",
                    backgroundColor: isChecked ? "#f8f8f8" : "",
                    width: "90vw",
                    maxWidth: "850px",
                    border: "none",
                    boxShadow: "none",
                    justifyContent: "space-between",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={
                      parameter === "Books"
                        ? `thumbnail of ${element.volumeInfo.title}`
                        : parameter === "Movies" || parameter === "Series"
                        ? `thumbnail of ${element.original_title}`
                        : ""
                    }
                    image={
                      parameter === "Books"
                        ? element.volumeInfo.imageLinks === undefined
                          ? ""
                          : element.volumeInfo.imageLinks.thumbnail
                        : parameter === "Movies" || parameter === "Series"
                        ? `https://image.tmdb.org/t/p/original${element.backdrop_path}`
                        : ""
                    }
                    sx={{
                      width: "100%",
                      maxWidth: "200px",
                      height: "150px",
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
                      {parameter === "Books"
                        ? element.volumeInfo.title
                        : parameter === "Movies"
                        ? element.original_title
                        : parameter === "Series"
                        ? element.name
                        : ""}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="text-truncate-para"
                    >
                      {parameter === "Books"
                        ? element.volumeInfo.subtitle
                        : parameter === "Movies" || "Series"
                        ? element.overview
                        : ""}
                    </Typography>
                  </CardContent>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignSelf: "center",
                    }}
                  >
                    {isChecked ? (
                      <CheckBoxIcon
                        onClick={() => setIsChecked(false)}
                        sx={{ cursor: "pointer" }}
                      />
                    ) : (
                      <CheckBoxOutlineBlankIcon
                        onClick={() => test(ref.current,data,index)}
                        sx={{ cursor: "pointer" }}
                      />
                    )}
                    <DeleteOutlineOutlinedIcon
                      sx={{ cursor: "pointer", marginTop: "15px" }}
                      onClick={()=> console.log(tempData)}
                    />
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </div>
      </>
    );
  }
}

function DetailedTracking() {
  const { storedMovies, storedBooks, storedSeries } = useContext(DataContext);
  const routeParams = useParams();
  const routeId = routeParams.id;

  if (routeId === "Books") {
    return <DataRender data={storedBooks} parameter={routeId} list={completedBooks} setList={setCompletedBooks} />;
  } else if (routeId === "Series") {
    return <DataRender data={storedSeries} parameter={routeId} list={completedSeries} setList={setCompletedSeries}/>;
  } else if (routeId === "Movies") {
    return <DataRender data={storedMovies} parameter={routeId} list={completedMovies} setList={setCompletedMovies} />;
  }
}

export default DetailedTracking;
