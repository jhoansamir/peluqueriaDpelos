import styles from "../styles/Navbar.module.css"
import Image from "next/image"

const Navbar = () =>{
    return (
        <div className={styles.container}>
        <div className={styles.item}>
          <ul className={styles.list}>
            <li className={styles.listItem}>Homepage</li>
            <li className={styles.listItem}>Products</li>
            <li className={styles.listItem}>Menu</li>
            <li className={styles.listItem}>Events</li>
            <li className={styles.listItem}>Blog</li>
            <li className={styles.listItem}>Contact</li>
          </ul>
        </div>
        </div>
    )
}
export default Navbar