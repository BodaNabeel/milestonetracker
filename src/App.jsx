import { Divider, useMediaQuery } from "@mui/material";
import ResponsiveAppBar from "./component/ResponsiveAppBar";
import SearchBar from "./component/SearchBar";
import React, { useContext, useState } from "react";
import { DataContext } from "./data/DataContext";
import DataDisplay from "./component/DataDisplay";
import DoughnutChart from "./component/DoughnutChart";
import ProgressOverviewCard from "./component/card/ProgressOverviewCard";
function App() {
  const responsiveSearchBar = useMediaQuery("(max-width:700px)");
  const [searchFieldQuery, setSearchFieldQuery] = React.useState("");
  const { query } = useContext(DataContext);
  const [isHome, setIsHome] = useState(true)

  return (
    <>
      <ResponsiveAppBar
        setIsHome={setIsHome}
        searchFieldQuery={searchFieldQuery}
        setSearchFieldQuery={setSearchFieldQuery}
      />

      {responsiveSearchBar ? (
        <SearchBar
        setIsHome={setIsHome}
          searchFieldQuery={searchFieldQuery}
          setSearchFieldQuery={setSearchFieldQuery}
        />
      ) : null}
      {responsiveSearchBar ? null : <Divider />}
      {isHome ? <ProgressOverviewCard/> : <DataDisplay/>}
      {/* {query  ? <DataDisplay /> : <ProgressOverviewCard/>} */}
      
    </>
  );
}

export default App;
