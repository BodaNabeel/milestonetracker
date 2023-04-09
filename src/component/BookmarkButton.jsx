import { Button, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import { DataContext } from "../data/DataContext";
function BookmarkButton({ token, setData, identifier, uniquePara, data }) {
  const { clickedButtonsList, setClickedButtonsList } = useContext(DataContext);

  const DynamicRenderingOfButton = function ({ el }) {
    const index = clickedButtonsList.findIndex((item) => item === el);
    const isClicked = index !== -1;

    return (
      <>
        {isClicked ? <TurnedInIcon /> : <TurnedInNotIcon />}
        {isClicked ? "Remove from list" : "Add to list"}
      </>
    );
  };
  const handleClick = function () {
    const index = clickedButtonsList.findIndex((item) => item === uniquePara);
    if (index !== -1) {
      const newClickedButtonsList = [...clickedButtonsList];
      newClickedButtonsList.splice(index, 1);
      setClickedButtonsList(newClickedButtonsList);

      data.forEach((element, index) => {
        if (element.id === uniquePara) {
          const updatedDataList = [...data];
          updatedDataList.splice(index, 1);
          setData(updatedDataList);
        }
      });
    } else {
      setData((prevState) => [...prevState, identifier[token]]);
      setClickedButtonsList((prevState) => [...prevState, uniquePara]);
    }
  };
  return (
    <>
      <Button id={uniquePara} onClick={handleClick} size="small">
        <DynamicRenderingOfButton el={uniquePara} />
      </Button>
    </>
  );
}

export default BookmarkButton;
