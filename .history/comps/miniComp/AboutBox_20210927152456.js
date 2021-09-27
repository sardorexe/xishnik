export default function AboutBox({ icon, title, content }) {
  return (
    <div className="aboutBox">
      <div className="icon">
        <i className={icon}></i>
      </div>
      <div className="text">
          <p className="title">{title}</p>
      </div>
    </div>
  );
}
