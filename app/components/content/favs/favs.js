// components
import SavedMovieWidget from "../../savedMovieWidget/saved.MovieWidget";
import { useContext } from 'react';
import { AppContext } from '@/app/components/context/context'
// css
import styles from "./favs.module.css"

export default function Favs(props) {
    // use context hook
    const app = useContext(AppContext)
    let n = 0
    return (
        <section className={styles.heartSection}>
            <div className={styles.headingContainer}>
                <h1>My favorites </h1>
            </div>
            <ul>
                {
                    app.favs.map((movie) =>
                        <li key={n++}>
                            <SavedMovieWidget backgroundImg={movie.movieBG} title={movie.title} name={movie.name} />
                            <p>{movie.title ? movie.title : movie.name}</p>
                        </li>
                    )
                }
            </ul>
        </section>
    )
}