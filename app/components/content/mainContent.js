// css
import styles from "./mainContent.module.css"
// components
import NowPlaying from "../movies/nowPlaying/nowPlaying"
import Popular from "../movies/popular/popular"
import TopRated from "../movies/topRated/topRated"
import Search from "./search/search"
import UpComing from "../movies/upComing/upComing"
import Favs from "./favs/favs";
import MovieFront from "./movieFront/movieFront"
import Account from "./account/account"
import ShowCase from "@/app/components/showCase/showCase"

export default function MainContent(props) {
    // ************************************************** variables
    // array of now playing movies
    const nowPlayingMovies = props.playing.nowPlayingMovies
    // array of popular movies
    const popularMovies = props.playing.popularMovies
    // array of top rated movies
    const topRatedMovies = props.playing.topRatedMovies
    // array of upcoming movies 
    const upComingMovies = props.playing.upcomingMovies
    // array of shows currently on tv
    const onTv = props.playing.onTv
    // array of popular tv show
    const popularTvShows = props.playing.popularTvShow
    //array of top rated tv shows
    const topRatedTvShows = props.playing.topRatedTvShow

    // ************************************************** render

    switch (true) {
        case props.navSelection.homeClicked:
            return (
                <section id="main-content" className={styles.homeSection}>
                    {/* container */}
                    <div>
                        <ShowCase movies={popularMovies} tvShows={onTv}/>
                        <NowPlaying isTvShow={true} movies={onTv} />
                        <NowPlaying movies={nowPlayingMovies} />
                        <Popular isTvShow={true} movies={popularTvShows} />
                        <Popular movies={popularMovies} />
                    </div>
                </section>
            );
        case props.navSelection.movieClicked:
            return (
                <section id="main-content" className={styles.homeSection}>
                    {/* container */}
                    <div>
                        <ShowCase movies={popularMovies} />
                        <NowPlaying movies={nowPlayingMovies} />
                        <UpComing movies={upComingMovies} />
                        <Popular movies={popularMovies} />
                        <TopRated movies={topRatedMovies} />
                    </div>
                </section>
            );
        case props.navSelection.tvShowClicked:
            return (
                <section id="main-content" className={styles.homeSection}>
                    {/* container */}
                    <div>
                        <ShowCase tvShows={topRatedMovies}  />
                        <NowPlaying isTvShow={true} movies={onTv} />
                        <TopRated isTvShow={true} movies={topRatedTvShows} />
                        <Popular isTvShow={true} movies={popularTvShows} />
                    </div>
                </section>
            );
        case props.navSelection.heartClicked:
            return (
                <Favs />
            );
        case props.navSelection.searchClicked:
            return (
                <Search playing={props.playing} />
            )
        case props.navSelection.userClicked:
            return (
                <Account />
            )
        case props.navSelection.openMovieClicked:
            return (
                <MovieFront />
            )

    }
}



