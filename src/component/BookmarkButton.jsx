import { Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import { DataContext } from "../data/DataContext";
function BookmarkButton({ token, setData, identifier }) {
  const { series, setStoredSeries, storedSeries } = useContext(DataContext);

  useEffect(() => {
    console.log(storedSeries);
  }, [storedSeries]);

  return (
    <>
      <Button
        id={token}
        onClick={() =>
          setData((prevState) => [...prevState, identifier[token]])
        }
        size="small"
      >
        <TurnedInNotIcon /> Add to list
        {/* <TurnedInIcon /> Remove from list */}
      </Button>
    </>
  );
}

export default BookmarkButton;
