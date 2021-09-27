import styles from "../styles/Biography.module.css";
import Image from "next/image";
import AboutBox from "./miniComp/AboutBox";

export default function Biography() {
  return (
    <main className={styles.container}>
      <h1 className={styles.contentTitle}>Биография</h1>
      <div className={styles.parentContent}></div>
      <div className={styles.img}>
        <Image
          alt="xishnik, ilhom, xiwnik, hishnik, hiwnik, litsey, yurist, xorazm, gurlan"
          src="/biography.jpg"
          width={100}
          height={100}
        />
      </div>
      <div className={styles.content}>
        <h3>
          <li>Ильхaм Эгамберганов</li>
        </h3>
        <div className={styles.about}>
          <AboutBox
            icon="fal fa-calendar"
            title="Дата рождения"
            content="22.12.2004"
          />
          <AboutBox
            icon="fas fa-map-marker-alt"
            title="Место рождения"
            content="Хорезм, Узбекистан"
          />
          <AboutBox icon="fas fa-briefcase" title="Профессия" content="Юрист" />
        </div>
      </div>
    </main>
  );
}
