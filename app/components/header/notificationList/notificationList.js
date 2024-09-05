// css
import styles from "./notificationList.module.css"
// images
import Image from "next/image";
import Bell from "@/public/bell-regular.svg"

export default function ListOfNotifications() {
  //************************************************** */ events
  // handle click - remove list item
  const removeListItem = (e) => {
    // list item
    const listItem = e.target.parentElement;
    // remove list item
    listItem.style.display = "none"
  }

  return (
    <div className={styles.ListOfNotifications} >

      {/* header */}
      <div className={styles.header}>
        <p>Notifications</p>
      </div>

      {/* body */}
      <div className={styles.body}>
        <Image src={Bell} />
        <h4>Your notifications live Here</h4>
      </div>

    </div>
  )
}