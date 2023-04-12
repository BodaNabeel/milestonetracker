import { Divider, useMediaQuery } from "@mui/material";
import ResponsiveAppBar from "./component/ResponsiveAppBar";
import SearchBar from "./component/SearchBar";
import React, { useContext } from "react";
import { DataContext } from "./data/DataContext";
import DataDisplay from "./component/DataDisplay";
import DoughnutChart from "./component/DoughnutChart";

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

      {query ? <DataDisplay /> : <DoughnutChart/>}
      
    </>
  );
}

export default App;
