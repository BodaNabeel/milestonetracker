import { Divider, useMediaQuery } from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar";
import SearchBar from "./SearchBar";
import React, { useContext, useEffect } from "react";
import { DataContext } from "./DataStore";

function App() {
  const responsiveSearchBar = useMediaQuery("(max-width:700px)");
  const [searchFieldQuery, setSearchFieldQuery] = React.useState("");

  // const { movies, books } = React.useContext(DataContext);
  const { movies, books } = useContext(DataContext);
  // console.log(movies);
  useEffect(() => {
    let length = Object.keys(movies).length
    length > 0 ? console.log(movies) :  null;
    // console.log(Object.keys(movies).length)
    // movies.length > 0 ? console.log(movies) : null;
  }, [movies]);

  return (
    <>
      <ResponsiveAppBar
        searchFieldQuery={searchFieldQuery}
        setSearchFieldQuery={setSearchFieldQuery}
      />

      {responsiveSearchBar ? (
        <SearchBar
          searchFieldQuery={searchFieldQuery}
          setSearchFieldQuery={setSearchFieldQuery}
        />
      ) : null}

      {responsiveSearchBar ? null : <Divider />}
    </>
  );
}

export default App;
