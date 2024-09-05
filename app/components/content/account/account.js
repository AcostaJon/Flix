// react
import Image from "next/image"
import { useContext } from "react"
import { AppContext } from "../../context/context"
import styles from "./account.module.css"
export default function Account() {
    const app = useContext(AppContext)
    return (
        <section className={styles.userSection}>
            <form onSubmit={app.updateUserCred} >
                {/* name and email container */}
                <div className={styles.nameEmailContainer}>
                    {/* name */}
                    <div >
                        <label>Name</label>
                        <input type="text" id="nameInput" required />
                    </div>
                    {/* email */}
                    <div>
                        <label>Email</label>
                        <input name="email" type="email" id="emailInput" required />
                    </div>
                </div>
                {/* image container*/}
                <div className={styles.imageContainer}>
                    {/* image */}
                    <label>Profile Picture</label>
                    <div>
                        <Image src={app.preview} width={"35"} height={"35"} alt="preview image" />
                        <input type="file" id="file" name="image" onChange={app.onChangeUserImage} />
                    </div>
                    <input className={styles.submitButton} type="submit" value="Update" />
                </div>
                {/* payment container */}
                <div className={styles.paymentContainer}>
                    {/* payment method */}
                    <div>
                        <label>Subscription</label>
                        <input type="button" value="Current Subscription: $19.99" />
                    </div>
                </div>
            </form>
        </section>
    )
}