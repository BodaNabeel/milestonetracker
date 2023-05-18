import { createContext, useState, useEffect } from "react";
import axios from "axios";
import {
  readUserContent,
  writeBookEl,
  writeClickedButtonsList,
  writeCompletedBooks,
  writeCompletedMovies,
  writeCompletedSeries,
  writeMovieEl,
  writeSeriesEl,
} from "../config/firebase";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [loaded, setLoaded] = useState(false);

  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [books, setBooks] = useState([]);
  const [games, setGames] = useState([]);
  const [query, setQuery] = useState();
  const [error, setError] = useState();
  const [storedMovies, setStoredMovies] = useState([]);
  const [storedSeries, setStoredSeries] = useState([]);
  const [storedBooks, setStoredBooks] = useState([]);
  const [completedBooks, setCompletedBooks] = useState([]);
  const [completedMovies, setCompletedMovies] = useState([]);
  const [completedSeries, setCompletedSeries] = useState([]);
  const [clickedButtonsList, setClickedButtonsList] = useState([]);
  const baseURLforShow = `https://api.themoviedb.org/3/search/tv?api_key=30d24f251c62092cc350130a6f881fec&language=en-US&page=1&query=${query}`;
  const baseURLforMovie = `https://api.themoviedb.org/3/search/movie?api_key=30d24f251c62092cc350130a6f881fec&language=en-US&query=${query}`;
  const baseURLforBook = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyBAa6_wmFuqCdHBHF-45FsfTOhaFoPjHQA&maxResults=10`;
  const CompletedPendingData = {
    books: {
      title: "Books",
      completed: completedBooks.length,
      pending: storedBooks.length - completedBooks.length,
      total: storedBooks.length,
    },
    movies: {
      title: "Movies",
      completed: completedMovies.length,
      pending: storedMovies.length - completedMovies.length,
      total: storedMovies.length,
    },
    series: {
      title: "Series",
      completed: completedSeries.length,
      pending: storedSeries.length - completedSeries.length,
      total: storedSeries.length,
    },
  };

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await axios.get(baseURLforBook);
        const booksData = response.data;
        booksData.totalItems > 0 ? setBooks(booksData) : setBooks(false);
      } catch (err) {
        setError(err);
      }
    }

    async function fetchMovies() {
      try {
        const response = await axios.get(baseURLforMovie);
        const moviesData = response.data;
        moviesData.total_results > 0 ? setMovies(moviesData) : setMovies(false);
      } catch (err) {
        setError(err);
      }
    }

    async function fetchSeries() {
      try {
        const response = await axios.get(baseURLforShow);
        const seriesData = response.data;
        seriesData.total_results > 0 ? setSeries(seriesData) : setSeries(false);
      } catch (err) {
        setError(err);
      }
    }

    if (query) {
      setBooks([]);
      setMovies([]);
      setSeries([]);
      fetchBooks();
      fetchMovies();
      fetchSeries();
    }
  }, [query]);

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
  const updateQuery = (newQuery) => {
    setQuery(newQuery);
  };

  useEffect(() => {
    readUserContent(
      setStoredBooks,
      setStoredMovies,
      setStoredSeries,
      setCompletedBooks,
      setCompletedMovies,
      setCompletedSeries,
      setLoaded,
      setClickedButtonsList
    );
  }, []);

  useEffect(() => {
    const userIdFromLocalStorage = localStorage.getItem("userIdentification");

    writeBookEl(userIdFromLocalStorage, storedBooks, loaded);
    writeMovieEl(userIdFromLocalStorage, storedMovies, loaded);
    writeSeriesEl(userIdFromLocalStorage, storedSeries, loaded);
    writeCompletedBooks(userIdFromLocalStorage, completedBooks, loaded);
    writeCompletedMovies(userIdFromLocalStorage, completedMovies, loaded);
    writeCompletedSeries(userIdFromLocalStorage, completedSeries, loaded);
    writeClickedButtonsList(userIdFromLocalStorage, clickedButtonsList, loaded)
  }, [
    storedBooks,
    storedMovies,
    storedSeries,
    completedBooks,
    completedMovies,
    completedSeries,
  ]);

  return (
    <DataContext.Provider
      value={{
        movies,
        series,
        books,
        games,
        query,
        updateMovies,
        updateSeries,
        updateBooks,
        updateGames,
        setQuery,
        storedSeries,
        setStoredSeries,
        storedBooks,
        setStoredBooks,
        storedMovies,
        setStoredMovies,
        clickedButtonsList,
        setClickedButtonsList,
        completedBooks,
        setCompletedBooks,
        completedMovies,
        setCompletedMovies,
        completedSeries,
        setCompletedSeries,
        CompletedPendingData,
        error,
        setError,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// TODO:
// fix the delete functionality
// use googleauth function and test that for the built functionality
// make sure to change the rules inthe firebase rwaltime database
// finally create a main landing page
// go and ship it
