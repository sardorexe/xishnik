import styles from "../styles/Gallery.module.css";

export default function Gallery() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Галерея</h2>
      <div className={styles.photos}>
        <div className={styles.photo}>
          <img
            src="/gallery1.jpg"
            alt="Xishnik jalla xishnik, ilhom, xiwnik, hishnik, hiwnik, litsey, yurist, xorazm, gurlan"
          />
          <img
            src="/gallery2.jpg"
            alt="Xishnik jalla xishnik, ilhom, xiwnik, hishnik, hiwnik, litsey, yurist, xorazm, gurlan"
          />
          <img
            src="/gallery3.jpg"
            alt="Xishnik jalla xishnik, ilhom, xiwnik, hishnik, hiwnik, litsey, yurist, xorazm, gurlan"
          />
          <img
            src="/gallery4.jpg"
            alt="Xishnik jalla xishnik, ilhom, xiwnik, hishnik, hiwnik, litsey, yurist, xorazm, gurlan"
          />
          <img
            src="/gallery5.jpg"
            alt="Xishnik jalla xishnik, ilhom, xiwnik, hishnik, hiwnik, litsey, yurist, xorazm, gurlan"
          />
          <img
            src="/gallery1.jpg"
            alt="Xishnik jalla xishnik, ilhom, xiwnik, hishnik, hiwnik, litsey, yurist, xorazm, gurlan"
          />
        </div>
      </div>
    </section>
  );
}
