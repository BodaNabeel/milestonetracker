import { Divider, useMediaQuery } from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar";
import SearchBar from "./SearchBar";
import * as React from "react";
import { DataContext } from "./DataStore";

// export const publicData = React.createContext();

function App() {
  const responsiveSearchBar = useMediaQuery("(max-width:700px)");
  const [searchFieldQuery, setSearchFieldQuery] = React.useState("");

  const {movies} = React.useContext(DataContext)
  console.log(movies)
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
