import { useEffect, useState } from "react";
import "./circle.css";

function Circle() {
  const [degree, setDegree] = useState([0, 45, 90, 135, 180]);

  const rotateRight = () => {
    const neww = [...degree];
    const temp = neww[neww.length - 1];
    for (let i = neww.length - 1; i > 0; i--) {
      neww[i] = neww[i - 1];
    }
    neww[0] = temp;
    setDegree(neww);
  };

  const rotateLeft = () => {
    const neww = [...degree];
    const temp = neww[0];
    for (let i = 0; i < neww.length - 1; i++) {
      neww[i] = neww[i + 1];
    }
    neww[neww.length - 1] = temp;
    setDegree(neww);
  };

  useEffect(() => {
    console.log("degree changed", degree);
  }, [degree]);

  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      rotateLeft();
    } else {
      rotateRight();
    }
  };

  return (
    <div className="mask position-absolute flex-circlearea z-1">
      <div className="position-absolute flex-circlearea z-1">
        <div className="circle-wrapper" onWheel={(e) => handleScroll(e)}>
          {degree.map((deg, index) => {
            return (
              <div
                className={`circle deg-${deg} ${index === 0 ? "green" : null}`}
              >
                {index}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Circle;
