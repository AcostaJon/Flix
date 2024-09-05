import { useContext } from 'react';
import { AppContext } from '@/app/components/context/context'
// css
import styles from "./savedMovieWidget.module.css"

export default function SavedMovieWidget(props) {
    // use context hook
    const app = useContext(AppContext)
    const bg = props.backgroundImg;

    const handleRemove = (e) => {
        app.removeSavedWidget(e, props.title, props.name)
    }


    return (
        <div className={styles.SavedMovieDiv} style={{ backgroundImage: bg }}>
            {/* saved movie box */}
            <div onClick={handleRemove}>
                <p>x</p>
            </div>
        </div>
    )
}

