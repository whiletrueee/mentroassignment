function Arrow({ data, rotateLeft, rotateRight }) {
  return (
    <div className="imageBottom">
      <div className="flex-arrow">
        <div className="" onClick={rotateLeft()}>
          Left
        </div>
        <div className="">
          <div className="mainImage">Image</div>
          <div className="mentorName">{data.name}</div>
        </div>
        <div className="" onClick={rotateRight()}>
          Right
        </div>
      </div>
    </div>
  );
}

export default Arrow;
