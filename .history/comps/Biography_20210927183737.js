import styles from "../styles/Biography.module.css";
import { useState, useEffect } from "react";
import AboutBox from "./miniComp/AboutBox";
import SocialMedia from "./miniComp/SocialMedia";

export default function Biography() {
  const [age, setAge] = useState(0);

  const calcAge = () => {
    let date = new Date();
    setAge(date.getFullYear() - 2004);
  };

  useEffect(() => {
    calcAge();
  }, []);

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
          <p className={styles.more}>
            Как дела? Я Ильхом. Я родился в Хорезме. Мне {age} лет. Реалист.
            Сейчас я учусь в юридическом лицее в Ташкенте. У меня немного
            друзей, но они близкие. Например, Джахонгир, Бехруз, Дениз и Сухроб.
            Это наш круг. В целом у меня хорошие отношения с девушками. Я курю.
            Мое любимое место - улица, на которой идет дождь или снег.
          </p>
          <div className={styles.social}>
            <SocialMedia
              icon="fab fa-instagram"
              url="https://instagram.com/xishnik_3583"
            />
            <SocialMedia icon="fas fa-phone" url="tel:+998974533583" />
            <SocialMedia icon=<i class="fab fa-telegram-plane"></i> url="tel:+998974533583" />
          </div>
        </div>
      </div>
      <div className={styles.freeContent}></div>
    </main>
  );
}
