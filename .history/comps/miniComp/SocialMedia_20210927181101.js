export default function SocialMedia({ icon, tooltip }) {
  return (
    <div className="social-button">
      <div className="tooltip">{tooltip}</div>
      <div className="background"></div>
      <i className="fab fa-instagram"></i>
    </div>
  );
}
