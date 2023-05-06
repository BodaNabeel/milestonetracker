import React, { useRef, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../data/DataContext";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Card, CardContent, CardMedia, Grid, Typography, useMediaQuery } from "@mui/material";
function DataRender({ data, parameter, list, setList,setData }) {
  const vwOne = useMediaQuery("(max-width:425px)");
  const vwTwo = useMediaQuery("(max-width: 290px)")
  const toggleCompletedList = (id, data) => {
    const disposalList = [...list];
    disposalList.push(data[id].id);
    setList(disposalList);

    if (list.includes(data[id].id)) {
      const index = list.indexOf(data[id].id);
      const disposalList = [...list];
      disposalList.splice(index, 1);
      setList(disposalList);
    }
  };
  const deleteAnItem = (id, data) => {
    const disposalData = [...data];
    disposalData.splice(id, 1);
    setData(disposalData)
  };
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
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    margin: "12px 0",
                    backgroundColor: list.includes(element.id) ? "#f8f8f8" : "",
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
                      // maxWidth: "100px",
                      maxWidth: "180px",
                      height: "150px",
                      objectFit: "fill",
                      alignSelf: "center",
                      display: vwOne ? "none" : ""
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
                    {list.includes(element.id) ? (
                      <CheckBoxIcon
                        onClick={() => toggleCompletedList(index, data)}
                        sx={{ cursor: "pointer" }}
                      />
                    ) : (
                      <CheckBoxOutlineBlankIcon
                        onClick={() => toggleCompletedList(index, data)}
                        sx={{ cursor: "pointer" }}
                      />
                    )}
                    <DeleteOutlineOutlinedIcon
                      sx={{ cursor: "pointer", marginTop: "15px" }}
                      onClick={() => deleteAnItem(index, data)}
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
  const {
    storedMovies,
    storedBooks,
    storedSeries,
    setStoredMovies,
    setStoredBooks,
    setStoredSeries,
    completedBooks,
    setCompletedBooks,
    completedMovies,
    setCompletedMovies,
    completedSeries,
    setCompletedSeries,
  } = useContext(DataContext);
  const routeParams = useParams();
  const routeId = routeParams.id;

  if (routeId === "Books") {
    return (
      <DataRender
        data={storedBooks}
        setData={setStoredBooks}
        parameter={routeId}
        list={completedBooks}
        setList={setCompletedBooks}
      />
    );
  } else if (routeId === "Series") {
    return (
      <DataRender
        data={storedSeries}
        setData={setStoredSeries}
        parameter={routeId}
        list={completedSeries}
        setList={setCompletedSeries}
      />
    );
  } else if (routeId === "Movies") {
    return (
      <DataRender
        data={storedMovies}
        setData={setStoredMovies}
        parameter={routeId}
        list={completedMovies}
        setList={setCompletedMovies}
      />
    );
  }
}

export default DetailedTracking;
