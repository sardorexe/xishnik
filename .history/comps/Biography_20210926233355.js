import styles from "../styles/Biography.module.css";
import Image from "next/image";

export default function Biography() {
  return (
    <main className={styles.container}>
      <div className={styles.img}>
        <Image
          alt="xishnik, ilhom, xiwnik, hishnik, hiwnik, litsey, yurist, xorazm, gurlan"
          src="/biography.jpg"
          width={100}
          height={100}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.contentTitle}>Биография</h1>
        <h3>Эгамберганов Ильхом Расулович</h3>
      </div>
    </main>
  );
}
