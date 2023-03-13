import { Divider, useMediaQuery } from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar";
import SearchBar from "./SearchBar";

function App() {
  const responsiveSearchBar = useMediaQuery("(max-width:700px)");

  return (
    <>
      <ResponsiveAppBar />
      <br />
      {responsiveSearchBar ? <SearchBar /> : null}
      <Divider />
    </>
  );
}

export default App;
