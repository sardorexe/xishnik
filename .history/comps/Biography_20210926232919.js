import styles from "../styles/Biography.module.css";
import Image from "next/image";

export default function Biography() {
  return (
    <main className={styles.container}>
      <div className={styles.img}>
        <Image src="/biography.jpg" width={100} height={100} />
      </div>
      <div className={styles.content}>
        <h2></h2>
      </div>
    </main>
  );
}
