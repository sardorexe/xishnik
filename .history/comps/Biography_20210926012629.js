import styles from "../styles/Biography.module.css"
import Image from "next/image"

export default function Biography() {
    return (
        <main className={styles.container}>
            <div className={styles.img}>
                Image
            </div>
            <div className={styles.content}></div>
        </main>
    )
}