import styles from "../../styles/Social.module.css";
import Link from "next/link";

export default function SocialMedia({ icon, tooltip, url }) {
  return (
    <Link href={url}>
      <a className={styles.socialButton} target="_blank" className="social-button">
        <span className="tooltip">{tooltip}</span>
        <span className="background"></span>
        <i className="fab fa-instagram"></i>
      </a>
    </Link>
  );
}
