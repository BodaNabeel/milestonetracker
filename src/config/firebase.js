import { initializeApp } from "firebase/app";
import {
  update,
  ref as sRef,
  getDatabase,
  get,
  child,
} from "firebase/database";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCni-Lamze6a0TQ-myN-xbVALXpU5lzJxQ",
  authDomain: "tracklist-demo.firebaseapp.com",
  databaseURL: "https://tracklist-demo-default-rtdb.firebaseio.com",
  projectId: "tracklist-demo",
  storageBucket: "tracklist-demo.appspot.com",
  messagingSenderId: "1091637128571",
  appId: "1:1091637128571:web:6038e854beab9044e0e1de",
  measurementId: "G-P2071M5XQE",
};
initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase();
const dbRef = sRef(getDatabase());
setPersistence(auth, browserLocalPersistence);

const writeBookEl = (userId, bookEl, loaded) => {
  if (loaded) {
    update(sRef(db, `users/${userId}/data`), {
      book: bookEl.length !== 0 ? bookEl : null,
    });
  }
};
const writeMovieEl = (userId, movieEl, loaded) => {
  if (loaded) {
    update(sRef(db, `users/${userId}/data`), {
      movie: movieEl.length !== 0 ? movieEl : null,
    });
  }
};
const writeSeriesEl = (userId, seriesEl, loaded) => {
  if (loaded) {
    update(sRef(db, `users/${userId}/data`), {
      series: seriesEl.length !== 0 ? seriesEl : null,
    });
  }
};
const writeCompletedBooks = (userId, completedBooks, loaded) => {
  if (loaded) {
    update(sRef(db, `users/${userId}/data`), {
      completed_books: completedBooks.length !== 0 ? completedBooks : null,
    });
  }
};
const writeCompletedMovies = (userId, completedMovies, loaded) => {
  if (loaded) {
    update(sRef(db, `users/${userId}/data`), {
      completed_movies: completedMovies.length !== 0 ? completedMovies : null,
    });
  }
};
const writeCompletedSeries = (userId, completedSeries, loaded) => {
  if (loaded) {
    update(sRef(db, `users/${userId}/data`), {
      completed_series: completedSeries.length !== 0 ? completedSeries : null,
    });
  }
};

const readUserContent = (
  updateBook,
  updateMovie,
  updateSeries,
  updateCompletedBooks,
  updateCompletedMovies,
  updateCompletedSeries,
  setLoaded
) => {
  const userID = localStorage.getItem("userIdentification");
  console.log("mounted");
  get(child(dbRef, `users/${userID}/data`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      const data = snapshot.val();
      data.book !== undefined ? updateBook(data.book) : updateBook([]);
      data.movie !== undefined ? updateMovie(data.movie) : updateMovie([]);
      data.series !== undefined ? updateSeries(data.series) : updateSeries([]);
      data.completed_books !== undefined
        ? updateCompletedBooks(data.completed_books)
        : updateCompletedBooks([]);
      data.completed_movies !== undefined
        ? updateCompletedMovies(data.completed_movies)
        : updateCompletedMovies([]);
      data.completed_series !== undefined
        ? updateCompletedSeries(data.completed_series)
        : updateCompletedSeries([]);
      console.log("mounted");
    }
    setLoaded(true);
  });
};

export {
  writeBookEl,
  writeMovieEl,
  writeSeriesEl,
  writeCompletedBooks,
  writeCompletedMovies,
  writeCompletedSeries,
  readUserContent,
};
