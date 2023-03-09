import { useEffect } from "react";
import "./circle.css";


function Circle({ rotateLeft, rotateRight, degree}) {
  
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
          {degree.map((data, index) => {
            return (
              <div
                className={`circle deg-${data.deg}`}
              >
                <img src={data.image} alt="person" width={'160px'} height={'160px'} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Circle;
