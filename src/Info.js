import "./Info.css";

function Info({ data }) {
  return (
    <div className="parentInfo">
      <div className="infoBox">
        <div className="text-rating">
          <div className="">{data.rating}</div>
          <div className="">Star</div>
        </div>
        <div className="text-name">
          <div className="">{data.name}</div>
          <div className="">{data.position}</div>
        </div>
        <div className="paragraph">{data.description}</div>
        <button className="buttonSession">Book A session</button>
      </div>
    </div>
  );
}

export default Info;
