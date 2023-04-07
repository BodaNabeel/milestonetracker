import { Divider, useMediaQuery } from "@mui/material";
import ResponsiveAppBar from "./component/ResponsiveAppBar";
import SearchBar from "./component/SearchBar";
import React, { useContext, useEffect } from "react";
import { DataContext } from "./data/DataStore";
import DataDisplay from "./component/DataDisplay";

function App() {
  const responsiveSearchBar = useMediaQuery("(max-width:700px)");
  const [searchFieldQuery, setSearchFieldQuery] = React.useState("");
  const { query } = useContext(DataContext);

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
