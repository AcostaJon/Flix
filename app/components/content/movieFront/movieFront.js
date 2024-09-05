// react
import ReactPlayer from 'react-player/youtube'
import { useContext, useEffect, useState } from "react"
import GetMovieTrailer from "@/app/api/movies/getMovieTrailer.js";
import GetTvTrailer from "@/app/api/tvShows/getTvTrailer.js";
// context (app state)
import { AppContext } from "../../context/context"
// styles
import styles from "./movieFront.module.css"

export default function MovieFront() {
    // get request trailer object - video 
    const [trailer, setTrailer] = useState({});
    // context - app state
    const app = useContext(AppContext);

    // after render, 
    useEffect(() => {

        // get request for movie trailer
        if (app.movieFrontData.title) {
            GetMovieTrailer(app.movieFrontData.id)
                .then((promise) => {
                    setTrailer(promise.results[0]);
                })
        }

        // get tv video if tv title is true - update movieVideo state
        if (app.movieFrontData.name) {
            // get movie video - update movieVideo state
            GetTvTrailer(app.movieFrontData.id)
                .then((promise) => {
                    setTrailer(promise.results[0]);
                })
        }
    }, [])

    // convert rating to percentage
    function finalRating(num) {
        const rating = num
        const n = (rating + 0.05) * 10;
        const finalRating = n.toString().slice(0, 2);

        return finalRating
    }

    // format release date - mm-dd-yyyy
    function formatDate(date) {
        //    const date = app.movieFrontData.releaseDate
        let finalFormat;
        let year;
        let month;
        let day;

        month = date.slice(5, 7);
        year = date.slice(0, 4);
        day = date.slice(8, 10)

        finalFormat = month + "-" + day + "-" + year
        return finalFormat
    }

    return (
        <section className={styles.MovieFrontSection}>

            {/* media container */}
            <div className={styles.mediaContainer}>
                {/* trailer and background image */}
                {/* ternary operation - if app context containes video(trailer) return video(trailer), if not return image */}
                {trailer ? <ReactPlayer
                    width='100%'
                    url={`https://www.youtube.com/watch?v=${trailer.key}`}
                    controls />
                    :
                    <div className={styles.mediaImage} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${app.movieFrontData.backgroundImg})` }}>
                    </div>
                }

            </div>

            {/* description and details container */}
            <div className={styles.detailsContainer}>
                {/* title continer */}
                <div className={styles.detailsTitleContainer}>
                    <h3 className={styles.logo}>Flix</h3>
                    <h1>{app.movieFrontData.title ? app.movieFrontData.title : app.movieFrontData.name}</h1>
                    <div className={styles.DateContainer}>
                        <p>{app.movieFrontData.releaseDate ? formatDate(app.movieFrontData.releaseDate) : formatDate(app.movieFrontData.firstAir)}</p>
                        <span>{app.movieFrontData.adult ? "18+" : "E"}</span>
                    </div>
                    <h3 className={styles.hideOnMobileLabel}>Fan Rating <span className={styles.ratingPercentage}>{`${finalRating(app.movieFrontData.rating)}%`}</span> </h3>
                    <h3 className={styles.hideOnMobileLabel}>Overview</h3>
                    <p className={styles.hideOnMobileDescription}>{app.movieFrontData.description ? app.movieFrontData.description : "Overview is not available"}</p>
                </div>

                {/* media in deatils container */}
                <div className={styles.detailsMediaContainer} >
                    {/* trailer and background */}
                    {/* ternary operation - if app context containes video(trailer) return video(trailer), if not return image */}
                    {trailer ? <ReactPlayer
                        width='100%'
                        url={`https://www.youtube.com/watch?v=${trailer.key}`}
                        className={styles.detailsPlayer}
                        controls />
                        :
                        <div className={styles.detailsImage} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${app.movieFrontData.backgroundImg})` }}>
                        </div>
                    }
                    {/*  rating and overview  */}
                    <div className={styles.detailsInfo}>
                        <h3 className={styles.ratingLabel}>Fan Rating <span className={styles.ratingPercentage}>{`${finalRating(app.movieFrontData.rating)}%`}</span> </h3>
                        <h3 className={styles.overviewLabel}>Overview</h3>
                        <p className={styles.overviewDescription}>{app.movieFrontData.description ? app.movieFrontData.description : "Overview is not available"}</p>
                    </div>

                </div>

            </div>

        </section>
    )
}