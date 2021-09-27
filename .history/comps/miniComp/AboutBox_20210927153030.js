export default function AboutBox({ icon, title, content }) {
  return (
    <>
      <div className="aboutBox">
        <div className="icon">
          <i className={icon}></i>
        </div>
        <div className="text">
          <p className="title">{title}</p>
          <p className="content">{content}</p>
        </div>
      </div>
      <style jsx>{`
        .aboutBox {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin-right: 10px;
        }

        .icon {
          margin-right: 10px;
          padding: 10px;
          border-right: 1px solid #fff;
        }

        .icon i {
          color: #fff;
        }
      `}</style>
    </>
  );
}
