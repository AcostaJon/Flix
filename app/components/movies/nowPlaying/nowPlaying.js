// css
import styles from "./nowplaying.module.css"
// components
import MovieWidget from "@/app/components/movieWidget/movieWidget"


export default function NowPlaying(props) {
    // array of movies
    const movies = props.movies;
    // boolean - is true when shows is chosen in navigation
    const isTvShow = props.isTvShow
    // list key
    let n = 0;
    // if movies variable has a value, return movies
    if (movies) {
        return (
            <div className={styles.nowPlaying}>
                {/* title box */}
                <div className={styles.title}>
                    <h2>{isTvShow ? "Currently Airing TV Shows" : "Movies In Theaters"}</h2>
                </div>
                {/* movies list */}
                <ul>
                    {
                        movies.slice(0, 13).map((movie) => (
                            <li key={n++}>
                                <MovieWidget backgroundImg={movie.poster_path} id={movie.id}
                                    title={movie.title} name={movie.name}
                                    releaseDate={movie.release_date} firstAir={movie.first_air_date} adult={movie.adult}
                                    description={movie.overview} rating={movie.vote_average}/>
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