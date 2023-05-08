import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
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
  
  // useEffect(() => {
  //   if (query) {
  //     setBooks([]);
  //     setMovies([]);
  //     setSeries([]);
  //     axios
  //       .get(baseURLforBook)
  //       .then((response) => {
  //         const data = response.data;
  //         data.totalItems > 0 ? setBooks(data) : setBooks(false);
  //       })
  //       .catch((err) => {
  //         setError(err);
  //       });
  //     axios
  //       .get(baseURLforMovie)
  //       .then((response) => {
  //         const data = response.data;
  //         // console.log(data)
  //         data.total_results > 0 ? setMovies(data) : setMovies(false);
  //       })
  //       .catch((err) => {
  //         setError(err);
  //       });
  //     axios.get(baseURLforShow).then((response) => {
  //       const data = response.data;
  //       console.log(data);
  //       data.total_results > 0 ? setSeries(data) : setSeries(false);
  //     });
  //   }
  // }, [query]);

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
