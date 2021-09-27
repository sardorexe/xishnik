import styles from "../styles/Gallery.module.css";

export default function Gallery() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Галерея</h2>
      <div className={styles.photos}>
          <div className={styles.photo}>
              <img src="" alt="" />
          </div>
      </div>
    </section>
  );
}
