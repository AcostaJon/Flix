// css
import styles from "./upComing.module.css"
// components
import MovieWidget from "../../movieWidget/movieWidget";

export default function UpComing(props) {
    const movies = props.movies;
    let n = 0;

    // shuffle array
    const shuffleArray = (arr) => {
        arr.sort(function (a, b) {
            return Math.random() - 0.5;
        });
    }

    // if movies variable is true, return movies list of upcoming movies
    if (movies) {
        // shuffle movies
        // shuffleArray(movies)
        return (
            <div className={styles.upComing}>
                <div className={styles.title}>
                    <h2>New & Coming Soon</h2>
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