import "./Info.css";
import { AiFillStar } from "react-icons/ai";

function Info({ dataset }) {
  return (
    <div className="parentInfo">
      <div className="infoBox">
        <div className="text-rating">
          <div className="">{dataset.rating}</div>
          <div className="star-flex">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
        <div className="text-name">
          <div className="">{dataset.name}</div>
          <div className="">{dataset.position}</div>
        </div>
        <div className="paragraph">{dataset.description}</div>
        <button className="buttonSession">Book A session</button>
      </div>
    </div>
  );
}

export default Info;
