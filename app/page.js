'use client'
// react
import React, { useEffect, useState } from "react";
import { AppContext } from "./components/context/context.js";
// api's calls
import GetNowPlayingMovies from "./api/movies/getNowPlaying";
import GetPopularMovies from "./api/movies/getPopularMovies.js"
import GetTopRatedMovies from "./api/movies/getTopRated";
import GetUpcomingMovies from "./api/movies/getUpcoming";
import GetNowPlayingTvShow from "./api/tvShows/getNowPlayingTvShows.js";
import GetPopularTvShow from "./api/tvShows/getPopularTvShows.js";
import GetTopRatedTvShow from "./api/tvShows/getTopRated";

// components
import Header from "./components/header/header";
import Navigation from "./components/nav/navigation";
import MainContent from "./components/content/mainContent";
import ListOfNotifications from "./components/header/notificationList/notificationList";
import OffCanvasMenu from "./components/header/offCanvasMenu/offCanvasMenu";
// css
import styles from "./page.module.css";

export default function Home() {
  //***************************************************************** */ state
  // upcoming movies - array
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  // now playing movies - array
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  // popular movies - array
  const [popularMovies, setPopularMovies] = useState([]);
  // top rated movies - array
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  // tv shows currently on TV - array
  const [onTv, setOnTv] = useState([])
  // popular tv shows - array
  const [popularTvShow, setPopularTvShow] = useState([])
  // top rated tv shows - array
  const [topRatedTvShow, setTopRatedTvShow] = useState([]);
  // home icon in navigation - boolean
  const [homeClicked, setHomeClicked] = useState(true);
  // movie icon in navigation - boolean
  const [movieClicked, setMovieClicked] = useState(false);
  // tv icon in navigation - boolean
  const [tvShowClicked, setTvShowClicked] = useState(false);
  // heart icon in navigation - boolean
  const [heartClicked, setHeartClicked] = useState(false);
  // search icon in navigation - boolean
  const [searchClicked, setSearchClicked] = useState(false);
  // user icon in navigation - boolean
  const [userClicked, setUserClicked] = useState(false);
  // open Movie
  const [openMovieClicked, setOpenMovieClicked] = useState(false);
  // notification list - component
  const [showNotificationList, setNotificationList] = useState(null);
  // Off canvas menu - component
  const [offCanvasMenu, setOffCanvasMenu] = useState(null);
  // username - string
  const [username, setUsername] = useState("Guest");
  // email - string
  const [email, setEmail] = useState("");
  // profile picture
  const [profilePicture, setProfilePicture] = useState("user-regular.svg")
  // preview profile pic - string
  const [preview, setPreview] = useState("user-regular.svg");
  // Favorite movies and shows - array
  const [favs, setFavs] = useState([]);
  // movie front data - object
  const [movieFrontData, setMovieFrontData] = useState({})

  //************************************************************************* */ use effect
  useEffect(() => {
    // ********************  update movie state *******************
    // now playing movies
    GetNowPlayingMovies()
      .then((promise) => {
        setNowPlayingMovies(promise.results);
      })

    // popular movies
    GetPopularMovies()
      .then((promise) => {
        setPopularMovies(promise.results)
      })
    // top rated movies
    GetTopRatedMovies()
      .then((promise) => {
        setTopRatedMovies(promise.results)
      })
    // upcoming movies
    GetUpcomingMovies()
      .then((promise) => {
        setUpcomingMovies(promise.results)
      })
    // ************** update tv show state ***********************
    // update state - "nowPlaying" variable has value of now playing tv show api call
    GetNowPlayingTvShow()
      .then((promise) => {
        setOnTv(promise.results)
      })
    // update state - "popular" variable has value of popular tv shows api call
    GetPopularTvShow()
      .then((promise) => {
        setPopularTvShow(promise.results)
      })
    // update state - "topRated" variable has value of top rated tv show api call
    GetTopRatedTvShow()
      .then((promise) => {
        setTopRatedTvShow(promise.results)
      })
    // select header element
    const header = document.getElementById("header")
    // set headers to position
    header.style.top = scroll;
  }, [])
  //************************************************************************* */ events
  //***************************************** */ header
  // notification icon clicked 
  const notificationIcon = (e) => {
    // update state variable "showList" with component <ListOfNotificaitons />
    setNotificationList(<ListOfNotifications />)
    // add/remove list when icon is clicked
    if (showNotificationList !== null) {
      setNotificationList(null)
    }
  }
  // hamburger icon - onClicked  
  const hamburgerIcon = (e) => {
    setOffCanvasMenu(<OffCanvasMenu showMyAccount={showMyAccount} />)
    if (offCanvasMenu !== null) {
      setOffCanvasMenu(null)
    }
  }
  // Off canvas menu - onClicked 
  const showMyAccount = (e) => {
    userAccount();
    setOffCanvasMenu(null)
  }
  //***************************************** */ navigation
  // home navigation onClicked  
  const homeDash = (e) => {
    // update state - "homeClicked" variable to true to signal main content component 
    setHomeClicked(true)
    // update state - "heartClicked" variable to false to signal main content component 
    setHeartClicked(false)
    // update state - "userClicked" variable to false to signal main content component 
    setUserClicked(false)
    // update state - "movieClicked" variable to false to signal main content component 
    setMovieClicked(false)
    // update state - "tvSHowClicked" variable to false to signal main content component 
    setTvShowClicked(false)
    // update state - "searchClicked" variable to false to signal main content component 
    setSearchClicked(false)
    // scroll to top of page
    window.scrollTo(0, 0);
  }
  // movie navigation onClicked 
  const movies = (e) => {
    // update state - "nowPlaying" variable has value of now playing movies api call
    GetNowPlayingMovies()
      .then((promise) => {
        setNowPlayingMovies(promise.results)
      })
    // update state - "popular" variable has value of popular movies api call
    GetPopularMovies()
      .then((promise) => {
        setPopularMovies(promise.results)
      })
    // update state - "topRated" variable has value of top rated movies api call
    GetTopRatedMovies()
      .then((promise) => {
        setTopRatedMovies(promise.results)
      })
    // update state - "movieClicked" variable to true to signal main content component 
    setMovieClicked(true)
    // update state - "homeClicked" variable to false to signal main content component 
    setHomeClicked(false)
    // update state - "tvSHowClicked" variable to false to signal main content component 
    setTvShowClicked(false)
    // update state - "heartClicked" variable to false to signal main content component 
    setHeartClicked(false)
    // update state - "userClicked" variable to false to signal main content component 
    setUserClicked(false)
    // update state - "searchClicked" variable to false to signal main content component 
    setSearchClicked(false)
    // scroll to top of page
    window.scrollTo(0, 0);
  }
  // tvShow navigation onClicked  
  const tvShows = (e) => {
    // update state - "nowPlaying" variable value is tv shows on tv
    setOnTv(onTv)
    // update state - "popular" variable value is popular tv shows
    setPopularTvShow(popularTvShow)
    // update state - "topRated" variable value is top rated tv shows
    setTopRatedTvShow(topRatedTvShow)
    // update state - "tvSHowClicked" variable to true to signal main content component 
    setTvShowClicked(true)
    // update state - "homeClicked" variable to false to signal main content component 
    setHomeClicked(false)
    // update state - "heartClicked" variable to false to signal main content component 
    setHeartClicked(false)
    // update state - "userClicked" variable to false to signal main content component 
    setUserClicked(false)
    // update state - "movieClicked" variable to false to signal main content component 
    setMovieClicked(false)
    // update state - "searchClicked" variable to false to signal main content component 
    setSearchClicked(false)
    // scroll to top of page
    window.scrollTo(0, 0);
  }
  // heart navigation onClicked 
  const myLikes = (e) => {
    // update state - "heartClicked" variable to true to signal main content component 
    setHeartClicked(true)
    // update state - "homeClicked" variable to false to signal main content component 
    setHomeClicked(false)
    // update state - "movieClicked" variable to false to signal main content component 
    setMovieClicked(false)
    // update state - "tvShowClicked" variable to false to signal main content component 
    setTvShowClicked(false)
    // update state - "userClicked" variable to false to signal main content component 
    setUserClicked(false)
    // update state - "searchClicked" variable to false to signal main content component 
    setSearchClicked(false)
    // scroll to top of page
    window.scrollTo(0, 0);
  }
  // search navigation onClicked  
  const search = (e) => {
    // update state - "searchClicked" variable to true to signal main content component
    setSearchClicked(true)
    // update state - "homeClicked" variable to false to signal main content component 
    setHomeClicked(false)
    // update state - "movieClicked" variable to false to signal main content component 
    setMovieClicked(false)
    // update state - "tvSHowClicked" variable to false to signal main content component 
    setTvShowClicked(false)
    // update state - "heartClicked" variable to false to signal main content component 
    setHeartClicked(false)
    // update state - "userClicked" variable to false to signal main content component 
    setUserClicked(false)
    // scroll to top of page
    window.scrollTo(0, 0);
  }
  // user navigation onClicked  
  const userAccount = (e) => {
    // update state - "userClicked" variable to true to signal main content component 
    setUserClicked(true)
    // update state - "homeClicked" variable to false to signal main content component 
    setHomeClicked(false)
    // update state - "movieClicked" variable to false to signal main content component 
    setMovieClicked(false)
    // update state - "tvShowClicked" variable to false to signal main content component 
    setTvShowClicked(false)
    // update state - "heartClicked" variable to false to signal main content component 
    setHeartClicked(false)
    // update state - "searchClicked" variable to true to signal main content component
    setSearchClicked(false)
    // scroll to top of page
    window.scrollTo(0, 0);
  }
  //***************************************** */ main content
  // user account - handleOnSubmit 
  const updateUserCred = (e) => {
    e.preventDefault()
    // user name input
    const userNameInput = e.target[0]
    // email input
    let emailInput = e.target[1]

    // update state
    setUsername(userNameInput.value)
    setEmail(emailInput.value)
    setProfilePicture(preview)

    // alert user, credentials updated
    alert("user credentials updated")

    // set default input values
    emailInput.value = ""
    userNameInput.value = ""
    setPreview("/user-regular.svg")

  }
  // user account - handle onChange choose profile picture
  const onChangeUserImage = (e) => {
    // select file
    const file = e.target.files[0]

    // file api object reader
    const reader = new FileReader();

    // load file url to preview state variable
    reader.onload = (e) => {
      setPreview(reader.result)
    };

    // read file as url using reader
    reader.readAsDataURL(file);

  }
  // save movies to FAVS
  const saveFavorites = (e, title, name) => {
    // stop page from loading
    e.stopPropagation();
    // heart icon from navigation
    const heartIcon = document.getElementById("heart_icon");
    // movie widget 
    const movie = e.target.parentElement.parentElement;

    // if heart icon has a class of grow-shrink, then remove it
    if (heartIcon.getAttribute("class") === "bounce") {
      heartIcon.classList.remove("bounce");
    }

    // movie widget background image
    const movieBG = movie.style.backgroundImage.substr(movie.style.backgroundImage.indexOf('url'), 250)

    // update state - favs array with movie object
    setFavs([...favs, { movieBG, title, name }])

    // if title is returned from user click then alert user
    if (title != undefined) {
      alert(title + " | Saved to Favorites")
    } else {
      alert(name + " | Saved to Favorites")
    }

    // style icon and 
    heartIcon.style.fill = "red"
    // add "grow-shrink" affect to heart icon
    heartIcon.classList.add("bounce")



  }
  // remove saved movie widget
  const removeSavedWidget = (e, title, name) => {
    const remove = e.target.parentElement.parentElement;
    const removeBG = remove.style.backgroundImage.substr(remove.style.backgroundImage.indexOf('url'), 250)
    // remove deleted widget from favs
    setFavs((movies) => {
      return movies.filter((movie) => removeBG != movie.movieBG)
    })
    // if title is returned alert user
    if (title != undefined) {
      alert(title + " | Removed ")
    } else {
      alert(name + " | Removed ")
    }
  }
  // open movie
  const openMovie = (backgroundImg, title, name, releaseDate, firstAir, rating, description, adult, id) => {
    // update state - "openMovieClicked" variable to true to signal main content component 
    setOpenMovieClicked(true)
    // update state - "userClicked" variable to false to signal main content component 
    setUserClicked(false)
    // update state - "homeClicked" variable to false to signal main content component 
    setHomeClicked(false)
    // update state - "movieClicked" variable to false to signal main content component 
    setMovieClicked(false)
    // update state - "tvShowClicked" variable to false to signal main content component 
    setTvShowClicked(false)
    // update state - "heartClicked" variable to false to signal main content component 
    setHeartClicked(false)
    // update state - "searchClicked" variable to true to signal main content component
    setSearchClicked(false)
    // set movie front data
    setMovieFrontData({ backgroundImg, title, name, releaseDate, firstAir, rating, description, adult, id })
    // scroll to top of page
    window.scrollTo(0, 0);
  }

  return (
    <main className={styles.main}>
      <AppContext.Provider value={{ saveFavorites, removeSavedWidget, openMovie, updateUserCred, onChangeUserImage, favs, movieFrontData, preview}}>
        <Header userName={username} email={email} profilePicture={profilePicture} components={{ showNotificationList, offCanvasMenu }} callBacks={{ notificationIcon, hamburgerIcon }} />
        <MainContent navSelection={{ homeClicked, movieClicked, tvShowClicked, heartClicked, searchClicked, userClicked, openMovieClicked }}
          playing={{ nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies, onTv, popularTvShow, topRatedTvShow, favs }} />
        <Navigation callBacks={{ homeDash, movies, tvShows, myLikes, userAccount, search }} />
      </AppContext.Provider>
    </main >
  );

}
