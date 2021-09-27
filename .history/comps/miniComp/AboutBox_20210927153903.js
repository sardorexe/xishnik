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
          margin: ;
        }

        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;
          padding: 10px;
          border-right: 1px solid #fff;
        }

        .title {
          font-family: "Montserrat", sans-serif;
          color: #5a5a5a;
        }

        .content {
          font-family: "Poppins", sans-serif;
          font-weight: bold;
        }

        .icon i {
          color: #fff;
        }
      `}</style>
    </>
  );
}
