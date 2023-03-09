import "./Info.css";

function Info() {
  return (
    <div className="parentInfo">
      <div className="infoBox">
        <div className="text-rating">
          <div className="">4.9</div>
          <div className="">Star</div>
        </div>
        <div className="text-name">
          <div className="">Prankur Gupta</div>
          <div className="">SDE @Amazon</div>
        </div>
        <div className="paragraph">
          I am a Senior Software Developer American Express. Have been
          passionately solving Leetcode, HackerRank, Codechef, Codeforces
          problems, and enthusiastically solving problems with the analysis of
          space.
        </div>
        <button className="buttonSession">Book A session</button>
      </div>
    </div>
  );
}

export default Info;
