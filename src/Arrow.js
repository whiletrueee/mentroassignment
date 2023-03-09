function Arrow({ rotateLeft, rotateRight, degree }) {
  return (
    <div className="imageBottom">
      <div className="flex-arrow">
        <div className="" onClick={rotateLeft()}>
          Left
        </div>
        <div className="">
          <img
            src={degree.image}
            alt="person"
            width={"160px"}
            height={"160px"}
          />
          <div className="mentorName">{degree.name}</div>
        </div>
        <div className="" onClick={rotateRight()}>
          Right
        </div>
      </div>
    </div>
  );
}

export default Arrow;
