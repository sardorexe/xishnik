import styles from "../../styles/Social.module.css";
import Link from "next/link";

export default function SocialMedia({ icon, url }) {
  return (
    <Link href={url}>
      <a className={styles.button} target="_blank">
        <span className={styles.background}></span>
        <i className="fab fa-instagram"></i>
      </a>
    </Link>
  );
}
