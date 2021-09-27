import styles from "../styles/Biography.module.css";
import Image from "next/image";
import AboutBox from "./miniComp/AboutBox";

export default function Biography() {
  return (
    <main className={styles.container}>
      <h1 className={styles.contentTitle}>Биография</h1>
      <div className={styles.parentContent}>
        <div className={styles.img}>
          <img
            src="/biography.jpg"
            width="100%"
            alt="xishnik, ilhom, xiwnik, hishnik, hiwnik, litsey, yurist, xorazm, gurlan"
          />
        </div>
        <div className={styles.content}>
          <h2>
            <li>Ильхaм Эгамберганов</li>
          </h2>
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
            <AboutBox
              icon="fas fa-briefcase"
              title="Профессия"
              content="Юрист"
            />
          </div>
            <p className={styles.more}></p>
        </div>
      </div>
      <div className={styles.freeContent}></div>
    </main>
  );
}
