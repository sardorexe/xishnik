import styles from "../styles/Gallery.module.css";

export default function Gallery() {
  return (
    <section className={styles.container}>
      <h1 data-aos="fade-up" data-aos-offset="200" className={styles.title}>
        Галерея
      </h1>
      <div className={styles.photos}>
        <div
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="200"
          className={styles.photo}
        >
          <img
            src="/gallery1.jpg"
            alt="Xishnik jalla xishnik, ilhom, xiwnik, hishnik, hiwnik, litsey, yurist, xorazm, gurlan"
          />
        </div>
        <div className={styles.photo}>
          <img
            src="/gallery2.jpg"
            alt="Xishnik jalla xishnik, ilhom, xiwnik, hishnik, hiwnik, litsey, yurist, xorazm, gurlan"
          />
        </div>
        <div className={styles.photo}>
          <img
            src="/gallery3.jpg"
            alt="Xishnik jalla xishnik, ilhom, xiwnik, hishnik, hiwnik, litsey, yurist, xorazm, gurlan"
          />
        </div>
        <div className={styles.photo}>
          <img
            src="/gallery4.jpg"
            alt="Xishnik jalla xishnik, ilhom, xiwnik, hishnik, hiwnik, litsey, yurist, xorazm, gurlan"
          />
        </div>
        <div className={styles.photo}>
          <img
            src="/gallery5.jpg"
            alt="Xishnik jalla xishnik, ilhom, xiwnik, hishnik, hiwnik, litsey, yurist, xorazm, gurlan"
          />
        </div>
        <div className={styles.photo}>
          <img
            src="/gallery6.jpg"
            alt="Xishnik jalla xishnik, ilhom, xiwnik, hishnik, hiwnik, litsey, yurist, xorazm, gurlan"
          />
        </div>
      </div>
      <div className={styles.freeSpace}></div>
    </section>
  );
}
