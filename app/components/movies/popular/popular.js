// css
import styles from "./popular.module.css"
// components
import MovieWidget from "@/app/components/movieWidget/movieWidget"

// popular component
export default function Popular(props) {
    // array of movies
    const movies = props.movies;
    // boolean - is true when shows is chosen in navigation
    const isTvShow = props.isTvShow
    let n = 0;

    // shuffle array
    const shuffleArray = (arr) => {
        arr.sort(function (a, b) {
            return Math.random() - 0.5;
        });
    }
    // if movies is true, return movies
    if (movies) {
        return (
            <div className={styles.popular}>
                {/* title box */}
                <div className={styles.title}>
                    <h2>{isTvShow ? "Popular TV Shows" : "Popular Movies"}</h2>
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