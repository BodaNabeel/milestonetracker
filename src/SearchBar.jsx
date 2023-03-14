import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
export default function SearchBar({ searchFieldQuery, setSearchFieldQuery }) {
  const [data, setData] = React.useState(0);
  const handleSearch = (event) => {
    if (event.charCode === 13 || event.keyCode == 13) {
      setData(event.target.value);
      setSearchFieldQuery("");
      event.target.blur();
    }
  };
  const manageQuery = (event) => {
    setSearchFieldQuery(event.target.value);
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
        sx={{
          "& .MuiOutlinedInput-root": {
            "& > fieldset": {
              border: "none",
            },
          },
          margin: "0 10px",
          border: "1px solid #EEEEEE",
          borderRadius: "8px",
          background: "#F8F8F8",
        }}
        size="small"
        onKeyDown={handleSearch}
        placeholder="search movie/book/game"
        fullWidth
        value={searchFieldQuery}
        onChange={manageQuery}
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
