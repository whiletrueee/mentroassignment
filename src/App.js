import Circle from "./circle";
import Info from "./Info";
import Arrow from "./Arrow";
import { useEffect, useState } from "react";
import "./arrow.css";
import Image1 from "./asset/image1.png";
import Image2 from "./asset/image2.png";
import Image3 from "./asset/image3.png";
import Image4 from "./asset/image4.png";
import Image5 from "./asset/image5.png";

function App() {
  const dataset = [
    {
      name: "Prankur Gupta",
      rating: 4.9,
      image: Image1,
      description:
        "I am Prankur Gupta, I am working as a Software Development Engineer at Amazon. I can guide you throughout your preparation phase. Trust me when I tell you this I know the exact recipe to crack the coding interview rounds of top companies for the SDE role.",
      position: "SDE @Amazon",
    },
    {
      name: "Saurav Pal",
      rating: 5.0,
      image: Image2,
      description:
        "I am a Senior Software Developer American Express. Have been passionately solving Leetcode, HackerRank, Codechef, Codeforces problems, and enthusiastically solving problems with the analysis of space.",
      position: "SDE-2 @Amazon",
    },
    {
      name: "Saumya Singh",
      rating: 5.0,
      image: Image3,
      description:
        "Engineer @RedHat | Program Manager'20 @GirlScript | GHCI Scholar | International Open Source Award finalist by Red Hat | Winner SIH, 21U21 Award | Google Connect Winner'19 | Mentor GCI",
      position: "Software Engineer @Red Hat",
    },
    {
      name: "Keshav Bathla",
      rating: 5.0,
      image: Image4,
      description:
        "A curious learner, on a way to become a kickass developer who writes Python, Java, Javascript and Go | Software Engineer @Groww | Ex-Software Engineer @Grofers | Tech Consultant | Freelancer | Open Source Developer | Coding Instructor",
      position: "SDE-1 @Groww",
    },
    {
      name: "Ankita",
      rating: 5.0,
      image: Image5,
      description:
        "Working my way to build the world's future product. Machine Learning Engineer, Data and Technology Evangelist I breathe in developing software with intelligence. I have been involved with startups like DailyHunt, Firework Hq, MagilHub to build the AI end of their products. ",
      position: "ML Engineer @Firework",
    },
  ];

  const [degree, setDegree] = useState([0, 45, 90, 135, 180]);

  const rotateRight = () => {
    console.log("right");
    const neww = [...degree];
    const temp = neww[neww.length - 1];
    for (let i = neww.length - 1; i > 0; i--) {
      neww[i] = neww[i - 1];
    }
    neww[0] = temp;
    setDegree(neww);
  };

  const rotateLeft = () => {
    console.log("left");
    const neww = [...degree];
    const temp = neww[0];
    for (let i = 0; i < neww.length - 1; i++) {
      neww[i] = neww[i + 1];
    }
    neww[neww.length - 1] = temp;
    setDegree(neww);
  };

  useEffect(() => {
    console.log(degree);
  }, [degree]);

  return (
    <div className="screen">
      <Info dataset={dataset[degree.indexOf(90)]} />
      <Circle degree={degree} dataset={dataset} />
      <Arrow
        dataset={dataset[degree.indexOf(90)]}
        rotateLeft={rotateLeft}
        rotateRight={rotateRight}
      />
    </div>
  );
}

export default App;
