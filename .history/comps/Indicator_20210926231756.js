import { useState, useEffect } from "react";

export default function Indicator() {
  const [width, setWidth] = useState(0);
  const watchScrolling = () => {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    setWidth(scrolled);
  };

  useEffect(() => {
    window.onscroll = function() {}
  }, [width])

  return (
    <>
      <div className="indicator"></div>
      <style jsx>{`
        .indicator {
          position: fixed;
          top: 0;
          left: 0;
          width: ${width}%;
          height: 4px;
          background: #fff;
        }
      `}</style>
    </>
  );
}
