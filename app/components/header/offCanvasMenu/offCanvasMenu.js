import styles from "./offCanvasMenu.module.css"
// Component - notifications list
export default function OffCanvasMenu(props) {
  // *********************************************************** events
  // close button - close menu
  const closeMenu = (e) => {
    const menu = document.getElementById("offCanvasMenu")
    menu.style.display = "none"
  }

  // account selection - show account in main content
  const handleAccount = (e) => {
    props.showMyAccount(e)
  }

  return (
    <div className={styles.OffCanvasMenu} id="offCanvasMenu" >
      {/* container */}
      <div className={styles.Container}>
        {/* logo */}
        <h1>Flix</h1>
        {/* close button */}
        <span onClick={closeMenu} className={styles.closeButton}>x</span>
      </div>
      {/* menu items */}
      <ul>
        <li onClick={handleAccount}>Account</li>
      </ul>
    </div>
  )
}