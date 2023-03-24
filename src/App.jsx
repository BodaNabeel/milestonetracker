import { Divider, useMediaQuery } from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar";
import SearchBar from "./SearchBar";
import React, { useContext, useEffect } from "react";
import { DataContext } from "./data/DataStore";
import DataDisplay from "./DataDisplay";

function App() {
  const responsiveSearchBar = useMediaQuery("(max-width:700px)");
  const [searchFieldQuery, setSearchFieldQuery] = React.useState("");
  const { query, movies } = useContext(DataContext);
  // useEffect(() => {
  //   let length = Object.keys(movies).length;
  //   length > 0 ? console.log(movies) : null;
  // }, [movies]);

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

      {query ? <DataDisplay /> : null}
    </>
  );
}

export default App;
