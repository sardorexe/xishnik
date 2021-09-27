import { useState, useEffect, useRef } from "react";

export default function Indicator() {
  const [width, setWidth] = useState("");
  const watchScrolling = () => {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    setWidth(scrolled);
  };
  return (
    <>
      <div className="indicator">
        <div className="item"></div>
      </div>
      <style jsx>{`
        .indicator {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          height: 100vh;
        }

        .item {
            
          background: #fff;
          width: 100%;
        }
      `}</style>
    </>
  );
}
