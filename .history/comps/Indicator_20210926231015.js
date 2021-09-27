import {useState, useEffect, useRef} from "react"

export default function Indicator() {
    const [width, setWidth] = useState('')
    const watchScrolling = () => {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop
        
    }
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
          width: 4px;
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
