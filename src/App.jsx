import { Divider, useMediaQuery } from "@mui/material";
import ResponsiveAppBar from "./component/ResponsiveAppBar";
import SearchBar from "./component/SearchBar";
import React, { useContext } from "react";
import { DataContext } from "./data/DataContext";
import DataDisplay from "./component/DataDisplay";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
function App() {
  const responsiveSearchBar = useMediaQuery("(max-width:700px)");
  const [searchFieldQuery, setSearchFieldQuery] = React.useState("");
  const { query } = useContext(DataContext);

  // temoporary
  const BarChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Data 1',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
      {
        label: 'Data 2',
        data: [3, 9, 5, 7, 3],
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};
  return (
    <>
      <ResponsiveAppBar
        searchFieldQuery={searchFieldQuery}
        setSearchFieldQuery={setSearchFieldQuery}
      />

      {responsiveSearchBar ? (
        <SearchBar
          searchFieldQuery={searchFieldQuery}
          setSearchFieldQuery={setSearchFieldQuery}
        />
      ) : null}
      {responsiveSearchBar ? null : <Divider />}

      {query ? <DataDisplay /> : null}
      <BarChart/>
    </>
  );
}

export default App;
