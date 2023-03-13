import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
export default function SearchBar() {
  const [data, setData] = React.useState(0);
  const handleSearch = (event) => {
    if (event.charCode === 13 || event.keyCode == 13) {
      setData(event.target.value);
      event.target.value = "";
    }
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
        width: "100%",
        maxWidth: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        sx={{ margin: "0 10px" }}
        onKeyDown={handleSearch}
        placeholder="search movie/book/game"
        fullWidth
        id="fullWidth"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
