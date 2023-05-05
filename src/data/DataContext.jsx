import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [books, setBooks] = useState([]);
  const [games, setGames] = useState([]);
  const [query, setQuery] = useState();
  const [storedMovies, setStoredMovies] = useState([]);
  const [storedSeries, setStoredSeries] = useState([]);
  const [storedBooks, setStoredBooks] = useState([
    {
      "kind": "books#volume",
      "id": "8DZ6uAEACAAJ",
      "etag": "OSFPmoIwrZ8",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/8DZ6uAEACAAJ",
      "volumeInfo": {
        "title": "Naruto Box Set 1",
        "subtitle": "Volumes 1-27 with Premium",
        "authors": [
          "Masashi Kishimoto"
        ],
        "publisher": "VIZ Media LLC",
        "publishedDate": "2008-08-26",
        "description": "Best selling VIZ series now in complete and fan-desirable sets! Save $ by buying the first complete story arc of Naruto! Special bonus premium items included in each like full color, two sided poster and mini-booklet. All custom boxes have attractive box printing, sturdy handle and hook & look enclosures. Naruto Boxed Set contains all 27 volumes of Naruto manga featuring the first Naruto story arc. A wonderful item for all fans, the set comes in a quality sturdy corrugate display box and features attractive premium items! Naruto is a ninja-in-training with a need for attention, a knack for mischief and, sealed within him, a strange, formidable power. His antics amuse his instructor Kakashi and irritate his teammates, intense Sasuke and witty Sakura, but Naruto is serious about becoming the greatest ninja in the village of Konohagakure! Believe it!",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "1421525828"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781421525822"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 5216,
        "printType": "BOOK",
        "categories": [
          "Comics & Graphic Novels"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "comicsContent": true,
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=8DZ6uAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=8DZ6uAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.co.in/books?id=8DZ6uAEACAAJ&dq=naruto&hl=&cd=1&source=gbs_api",
        "infoLink": "http://books.google.co.in/books?id=8DZ6uAEACAAJ&dq=naruto&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Naruto_Box_Set_1.html?hl=&id=8DZ6uAEACAAJ"
      },
      "saleInfo": {
        "country": "IN",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IN",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=8DZ6uAEACAAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Best selling VIZ series now in complete and fan-desirable sets! Save $ by buying the first complete story arc of Naruto! Special bonus premium items included in each like full color, two sided poster and mini-booklet."
      }
    },
    {
      "kind": "books#volume",
      "id": "Yr6GswEACAAJ",
      "etag": "f/+durtapZg",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/Yr6GswEACAAJ",
      "volumeInfo": {
        "title": "Naruto",
        "authors": [
          "Masashi Kishimoto"
        ],
        "publishedDate": "2004",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "3551762554"
          },
          {
            "type": "ISBN_13",
            "identifier": "9783551762559"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 178,
        "printType": "BOOK",
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=Yr6GswEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=Yr6GswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "de",
        "previewLink": "http://books.google.co.in/books?id=Yr6GswEACAAJ&dq=naruto&hl=&cd=2&source=gbs_api",
        "infoLink": "http://books.google.co.in/books?id=Yr6GswEACAAJ&dq=naruto&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Naruto.html?hl=&id=Yr6GswEACAAJ"
      },
      "saleInfo": {
        "country": "IN",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IN",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=Yr6GswEACAAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      }
    },
    {
      "kind": "books#volume",
      "id": "Gzk5DwAAQBAJ",
      "etag": "ZJZze1icGSQ",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/Gzk5DwAAQBAJ",
      "volumeInfo": {
        "title": "Naruto 1",
        "subtitle": "Band 1",
        "authors": [
          "Masashi Kishimoto"
        ],
        "publishedDate": "2001-02-15",
        "description": "Naruto ist ein berüchtigter Tunichtgut in seinem Dorf, das fast ausschließlich aus Ninja besteht. Er liebt Nudelsuppe und spielt anderen gern Streiche. So ist es kein Wunder, dass er nicht gerade beliebt ist. Doch gerade deshalb will er der beste Ninja seines Dorfes werden. Zu diesem Zweck gehen er und seine Mitschüler Sasuke und Sakura beim großen Meister Kakashi in die Lehre...",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9783551762511"
          },
          {
            "type": "ISBN_10",
            "identifier": "3551762511"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 62,
        "printType": "BOOK",
        "categories": [
          "Comics & Graphic Novels"
        ],
        "averageRating": 5,
        "ratingsCount": 1,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "1.2.1.0.preview.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "comicsContent": true,
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=Gzk5DwAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=Gzk5DwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "de",
        "previewLink": "http://books.google.co.in/books?id=Gzk5DwAAQBAJ&dq=naruto&hl=&cd=3&source=gbs_api",
        "infoLink": "http://books.google.co.in/books?id=Gzk5DwAAQBAJ&dq=naruto&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Naruto_1.html?hl=&id=Gzk5DwAAQBAJ"
      },
      "saleInfo": {
        "country": "IN",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IN",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://play.google.com/books/reader?id=Gzk5DwAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Naruto ist ein berüchtigter Tunichtgut in seinem Dorf, das fast ausschließlich aus Ninja besteht."
      }
    },
    {
      "kind": "books#volume",
      "id": "TedvrgEACAAJ",
      "etag": "3nxZXPx49gE",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/TedvrgEACAAJ",
      "volumeInfo": {
        "title": "Uzumaki Naruto: Illustrations",
        "authors": [
          "Masashi Kishimoto"
        ],
        "publisher": "VIZ Media LLC",
        "publishedDate": "2015-11-03",
        "description": "The third full-color art book from the hit series Naruto! Experience Masashi Kishimoto's artwork in all of its colorful glory in this collection of images from the conclusion of the best-selling Naruto manga! Naruto, Sasuke, Sakura, Kakashi and all your favorite characters appear in nearly a hundred pages of gorgeous full-color images. The book also features commentary from creator Masashi Kishimoto, a beautiful double-sided poster and a sticker sheet!",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "1421584395"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781421584393"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 0,
        "printType": "BOOK",
        "categories": [
          "Art"
        ],
        "averageRating": 1,
        "ratingsCount": 1,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=TedvrgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=TedvrgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.co.in/books?id=TedvrgEACAAJ&dq=naruto&hl=&cd=4&source=gbs_api",
        "infoLink": "http://books.google.co.in/books?id=TedvrgEACAAJ&dq=naruto&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Uzumaki_Naruto_Illustrations.html?hl=&id=TedvrgEACAAJ"
      },
      "saleInfo": {
        "country": "IN",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IN",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=TedvrgEACAAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "The third full-color art book from the hit series Naruto! Experience Masashi Kishimoto&#39;s artwork in all of its colorful glory in this collection of images from the conclusion of the best-selling Naruto manga!"
      }
    },
    {
      "kind": "books#volume",
      "id": "rruOEAAAQBAJ",
      "etag": "+A18RVbs4EI",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/rruOEAAAQBAJ",
      "volumeInfo": {
        "title": "Atomic Habits",
        "subtitle": "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
        "authors": [
          "James Clear"
        ],
        "publisher": "National Geographic Books",
        "publishedDate": "2018-10-16",
        "description": "The #1 New York Times bestseller. Over 4 million copies sold! Tiny Changes, Remarkable Results No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results. If you're having trouble changing your habits, the problem isn't you. The problem is your system. Bad habits repeat themselves again and again not because you don't want to change, but because you have the wrong system for change. You do not rise to the level of your goals. You fall to the level of your systems. Here, you'll get a proven system that can take you to new heights. Clear is known for his ability to distill complex topics into simple behaviors that can be easily applied to daily life and work. Here, he draws on the most proven ideas from biology, psychology, and neuroscience to create an easy-to-understand guide for making good habits inevitable and bad habits impossible. Along the way, readers will be inspired and entertained with true stories from Olympic gold medalists, award-winning artists, business leaders, life-saving physicians, and star comedians who have used the science of small habits to master their craft and vault to the top of their field. Learn how to: make time for new habits (even when life gets crazy); overcome a lack of motivation and willpower; design your environment to make success easier; get back on track when you fall off course; ...and much more. Atomic Habits will reshape the way you think about progress and success, and give you the tools and strategies you need to transform your habits--whether you are a team looking to win a championship, an organization hoping to redefine an industry, or simply an individual who wishes to quit smoking, lose weight, reduce stress, or achieve any other goal.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9780735211292"
          },
          {
            "type": "ISBN_10",
            "identifier": "0735211299"
          }
        ],
        "readingModes": {
          "text": true,
          "image": false
        },
        "pageCount": 0,
        "printType": "BOOK",
        "categories": [
          "Business & Economics"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=rruOEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=rruOEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.co.in/books?id=rruOEAAAQBAJ&dq=atomic+habits&hl=&cd=1&source=gbs_api",
        "infoLink": "http://books.google.co.in/books?id=rruOEAAAQBAJ&dq=atomic+habits&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Atomic_Habits.html?hl=&id=rruOEAAAQBAJ"
      },
      "saleInfo": {
        "country": "IN",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IN",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=rruOEAAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Atomic Habits will reshape the way you think about progress and success, and give you the tools and strategies you need to transform your habits--whether you are a team looking to win a championship, an organization hoping to redefine an ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "yzFYEAAAQBAJ",
      "etag": "daNj31I6l0c",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/yzFYEAAAQBAJ",
      "volumeInfo": {
        "title": "Atomic Habits Summary (by James Clear)",
        "subtitle": "Summary and Illustration",
        "authors": [
          "James Clear"
        ],
        "publisher": "James Clear",
        "description": "SUMMARY: ATOMIC HABITS: An Easy & Proven Way to Build Good Habits & Break Bad Ones. This book is not meant to replace the original book but to serve as a companion to it. ABOUT ORIGINAL BOOK: Atomic Habits can help you improve every day, no matter what your goals are. As one of the world's leading experts on habit formation, James Clear reveals practical strategies that will help you form good habits, break bad ones, and master tiny behaviors that lead to big changes. If you're having trouble changing your habits, the problem isn't you. Instead, the issue is with your system. There is a reason bad habits repeat themselves over and over again, it's not that you are not willing to change, but that you have the wrong system for changing. “You do not rise to the level of your goals. You fall to the level of your systems” - James Clear I’m a huge fan of this book, and as soon as I read it I knew it was going to make a big difference in my life, so I couldn’t wait to make a video on this book and share my ideas. Here is a link to James Clear’s website, where I found he uploads a tonne of useful posts on motivation, habit formation and human psychology. DISCLAIMER: This is an UNOFFICIAL summary and not the original book. It designed to record all the key points of the original book.",
        "readingModes": {
          "text": true,
          "image": true
        },
        "printType": "BOOK",
        "categories": [
          "Self-Help"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.1.1.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=yzFYEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=yzFYEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.co.in/books?id=yzFYEAAAQBAJ&pg=PP1&dq=atomic+habits&hl=&cd=2&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=yzFYEAAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=yzFYEAAAQBAJ"
      },
      "saleInfo": {
        "country": "IN",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 355.25,
          "currencyCode": "INR"
        },
        "retailPrice": {
          "amount": 248.67,
          "currencyCode": "INR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=yzFYEAAAQBAJ&rdid=book-yzFYEAAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 355250000,
              "currencyCode": "INR"
            },
            "retailPrice": {
              "amountInMicros": 248670000,
              "currencyCode": "INR"
            }
          }
        ]
      },
      "accessInfo": {
        "country": "IN",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.co.in/books/download/Atomic_Habits_Summary_by_James_Clear-sample-epub.acsm?id=yzFYEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.co.in/books/download/Atomic_Habits_Summary_by_James_Clear-sample-pdf.acsm?id=yzFYEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=yzFYEAAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Here is a link to James Clear’s website, where I found he uploads a tonne of useful posts on motivation, habit formation and human psychology. DISCLAIMER: This is an UNOFFICIAL summary and not the original book."
      }
    }
  ]);
  const [completedBooks, setcompletedBooks] = useState(["1", "2"]);
  const [completedMovies, setCompletedMovies] = useState(["1", "2"]);
  const [completedSeries, setCompletedSeries] = useState(["1", "2"]);
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
      total: storedMovies.length
    },
    series: {
      title: "Series",
      completed: completedSeries.length,
      pending: storedSeries.length - completedSeries.length,
      total: storedSeries.length
    },
    // games: ["Games", completedGames.length, storedGames.length - completedGames.length ]
  };
  useEffect(() => {
    if (query) {
      axios.get(baseURLforMovie).then((response) => {
        let APIdata = response.data;
        if (APIdata.results.length > 0) {
          updateMovies(APIdata);
        } else updateMovies([]);
      });
      axios.get(baseURLforShow).then((response) => {
        let APIdata = response.data;
        APIdata.results.length > 0 ? updateSeries(APIdata) : updateSeries([]);
      });
      axios.get(baseURLforBook).then((response) => {
        let APIdata = response.data;
        APIdata.items.length > 0 ? updateBooks(APIdata) : updateBooks([]);
      });
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
        completedMovies,
        completedSeries,
        CompletedPendingData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
