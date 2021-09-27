import styles from "../styles/Home.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.background}>
          <video
            loop
            muted
            autoPlay
            style={{
              objectFit: "cover",
              height: "100%",
              width: "40%",
              opacity: "0.6",
            }}
            src="/background.mp4"
          ></video>
        </div>
        <div className={styles.content}>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="400"
            className={styles.textContent}
          >
            <h1>XISHNIK GANG</h1>
            <li> -- Я получу всё что хочу</li>
          </div>
        </div>
      </header>
    </>
  );
}
