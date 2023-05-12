import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { update, ref as sRef, getDatabase, set, onValue } from "firebase/database";
// import { DataContext } from "../data/DataContext";
// import { useContext, useEffect } from "react";

// const { books, movies } = useContext(DataContext);
const firebaseConfig = {
  apiKey: "AIzaSyBBy-cdmqc3JHtMlapo5ix-0M4MR8TfjfM",
  authDomain: "fir-demo-ad505.firebaseapp.com",
  projectId: "fir-demo-ad505",
  storageBucket: "fir-demo-ad505.appspot.com",
  messagingSenderId: "1057114301618",
  appId: "1:1057114301618:web:d29c8a203d91e8edf355ab",
  measurementId: "G-54XX7DRMSP",
};

initializeApp(firebaseConfig);
const db = getDatabase();
const writeUserContent = (BookEl,MovieEl,SeriesEl) => {
  set(sRef(db, "users/nabeel/data"), {
    book: BookEl,
    movie: MovieEl,
    series: SeriesEl
  });
};
const readUserContent = (updateBook,updateMovie,updateSeries) => {
    const ref = sRef(db, "users/nabeel/data");
    onValue(ref, (snapshot) => {
        const data = snapshot.val();
        data?.book !== undefined ? updateBook(data.book) : updateBook([]);
        data?.movie !== undefined ? updateMovie(data.movie): updateMovie([]);
        data?.series !== undefined ? updateSeries(data.series) : updateSeries([])
      
    })
}

export {writeUserContent,readUserContent}