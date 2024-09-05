// css
import styles from "./showCase.module.css"
// components
import ShowCaseWidget from "./showcaseWidget.js/showcaseWidget";

export default function ShowCase(props) {

    // empty variable "showcase"
    let showCase = [];

    // if props has movie list
    if (props.movies) {
        // update showcase variable with an array that has first 5 movies
        showCase = props.movies.slice(0, 5);
    }
    // if props has tv show list
    if (props.tvShows) {
        // update showcase variable with an array that has first tv shows
        showCase = props.tvShows.slice(1, 6);
    }
    // if props has tv shows and movies
    if (props.movies && props.tvShows) {
        // update showcase variable with both movies and tv shows
        const moviesTvshows = props.movies.slice(3, 5).concat(props.tvShows.slice(4,5)).concat(props.movies.slice(0, 1)).concat(props.tvShows.slice(5,6))
        // update showcase variabel
        showCase = moviesTvshows;
    }

    return (
        <div className={styles.showcaseContainer}>
            {/* list */}
            <ul className={styles.showcaseUl}>
                {showCase.map((show) =>
                    <li key={show.id}>
                        {/* widget */}
                        <ShowCaseWidget backgroundImg={show.poster_path} id={show.id}
                            title={show.title} name={show.name}
                            releaseDate={show.release_date} firstAir={show.first_air_date} adult={show.adult}
                            overview={show.overview} rating={show.vote_average} />
                       
                    </li>
                )}

            </ul>

        </div>
    )
}