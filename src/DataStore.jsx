import { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [books, setBooks] = useState([]);
  const [games, setGames] = useState([]);

  // useEffect(() => {
  //   // Fetch data from APIs and update state
  // }, []);

  const updateMovies = (newMovies) => {
    setMovies(newMovies);
  };

  const updateSeries = (newSeries) => {
    setSeries(newSeries);
  };

  const updateBooks = (newBooks) => {
    setBooks(newBooks);
  };

  const updateGames = (newGames) => {
    setGames(newGames);
  };

  return (
    <DataContext.Provider
      value={{
        movies,
        series,
        books,
        games,
        updateMovies,
        updateSeries,
        updateBooks,
        updateGames,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
