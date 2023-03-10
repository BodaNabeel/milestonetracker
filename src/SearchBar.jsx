import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  React.useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <TextField
        onChange={handleSearch}
        placeholder="search"
        fullWidth
        id="fullWidth"
      />
    </Box>
  );
}
