import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [data, setData] = React.useState(0);
  const handleEnter = (event) => {
    if (event.charCode === 13 || event.keyCode == 13) {
      setData(searchQuery);
    }
  };
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  React.useEffect(() => {
    if (data === 0) {
      console.log("Data hasn't fetched yet.");
    } else {
      console.log(data, "Data fetched from API");
    }
  }, [data]);

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <TextField
        onKeyDown={handleEnter}
        onChange={handleSearch}
        placeholder="search"
        fullWidth
        id="fullWidth"
      />
    </Box>
  );
}
