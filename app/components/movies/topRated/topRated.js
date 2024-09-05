// css
import styles from "./topRated.module.css"
// components
import MovieWidget from "../../movieWidget/movieWidget";

export default function TopRated(props) {
    // *********************************** variables
    const movies = props.movies;
    let n = 0;
    // boolean - is true when shows is chosen in navigation
    const isTvShow = props.isTvShow

    // shuffle array
    const shuffleArray = (arr) => {
        arr.sort(function (a, b) {
            return Math.random() - 0.5;
        });
    }

    // if movies variable is true, return movies
    if (movies) {
        // shuffle movies
        // shuffleArray(movies)
        return (
            <div className={styles.topRated}>
                <div className={styles.title}>
                    <h2>{isTvShow ? "Top Rated TV Shows" : "Top Rated Movies"}</h2>
                </div>
                {/* movies list */}
                <ul>
                    {
                        movies.slice(0, 15).map((movie) => (
                            <li key={n++}>
                                <MovieWidget backgroundImg={movie.poster_path} id={movie.id} title={movie.title} name={movie.name}
                                    releaseDate={movie.release_date} firstAir={movie.first_air_date} adult={movie.adult}
                                    description={movie.overview} rating={movie.vote_average}  />
                                <p>{movie.title ? movie.title : movie.name}</p>
                            </li>
                        )
                        )
                    }
                </ul>
            </div>
        )
    }
}