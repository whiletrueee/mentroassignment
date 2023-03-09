import { useState } from "react";
import "./circle.css";

function Circle({ degree, dataset }) {
  // const handleScroll = (e) => {
  //   if (e.deltaY > 0) {
  //     rotateLeft();
  //   } else {
  //     rotateRight();
  //   }
  // };

  return (
    <div className="mask position-absolute flex-circlearea z-1">
      <div className="position-absolute flex-circlearea z-1">
        <div className="circle-wrapper">
          {degree.map((data, index) => {
            return (
              <div key={index} className={`circle deg-${data} `}>
                <img
                  src={dataset[index].image}
                  alt="person"
                  width={"160px"}
                  height={"160px"}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Circle;
