import { Divider, useMediaQuery } from "@mui/material";
import ResponsiveAppBar from "./component/ResponsiveAppBar";
import SearchBar from "./component/SearchBar";
import React, { useContext, useState } from "react";
import { DataContext } from "./data/DataContext";
import DataDisplay from "./component/DataDisplay";
import ProgressOverviewCard from "./component/card/ProgressOverviewCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailedTracking from "./component/DetailedTracking";

function PrimaryApp() {
  const responsiveSearchBar = useMediaQuery("(max-width:700px)");
  const [searchFieldQuery, setSearchFieldQuery] = React.useState("");
  const [isHome, setIsHome] = useState(true);

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
    </>
  );
}
function App() {
  return (
    <BrowserRouter>
      <PrimaryApp />
      <Routes>
        <Route path="/" element={<ProgressOverviewCard />} />
        <Route path="/:res" element={<DataDisplay />} />
        <Route path="/tracking/:id" element={<DetailedTracking/>}/>

      </Routes>
    </BrowserRouter>
  );
}
export default App;
