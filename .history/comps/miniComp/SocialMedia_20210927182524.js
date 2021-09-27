import styles from "../../styles/Social.module.css";
import Link from "next/link";

export default function SocialMedia({ icon, url }) {
  return (
    <Link href={url}>
      <a className={styles.button} target="_blank">
        <i className="fab fa-instagram"></i>
        <span className={styles.background}></span>
      </a>
    </Link>
  );
}
