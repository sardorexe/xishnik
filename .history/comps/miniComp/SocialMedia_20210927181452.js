import styles from "../../styles/Social.module.css";
import Link from "next/link"

export default function SocialMedia({ icon, tooltip }) {
  return (
      <Link></Link>
    <div className="social-button">
      <div className="tooltip">{tooltip}</div>
      <div className="background"></div>
      <i className="fab fa-instagram"></i>
    </div>
  );
}
