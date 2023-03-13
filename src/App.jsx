import { Divider, useMediaQuery } from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar";
import SearchBar from "./SearchBar";
import * as React from "react";

function App() {
  const responsiveSearchBar = useMediaQuery("(max-width:700px)");
  const [searchFieldQuery, setSearchFieldQuery] = React.useState("");

  return (
    <>
      <ResponsiveAppBar searchFieldQuery={searchFieldQuery} setSearchFieldQuery={setSearchFieldQuery}/>
      <br />
      {responsiveSearchBar ? (
        <SearchBar searchFieldQuery={searchFieldQuery} setSearchFieldQuery={setSearchFieldQuery} />
      ) : null}
      <Divider />
    </>
  );
}

export default App;
