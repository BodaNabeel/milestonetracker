import { Divider, useMediaQuery } from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar";
import SearchBar from "./SearchBar";
import TempBar from "./TempBar";

function App() {
  const responsiveSearchBar = useMediaQuery("(max-width:700px)");

  return (
    <>
      {/* <ResponsiveAppBar /> */}
      <TempBar />
      <br />
      {responsiveSearchBar ? <SearchBar /> : null}
      <Divider />
    </>
  );
}

export default App;
