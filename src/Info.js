import "./Info.css";
import { AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";

function Info({ dataset }) {
  
  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

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
          <motion.div variants={variants} initial="initial" animate="animate">
            {dataset.name}
          </motion.div>
          <div className="">{dataset.position}</div>
        </div>
        <div className="paragraph">{dataset.description}</div>
        <button className="buttonSession">Book A session</button>
      </div>
    </div>
  );
}

export default Info;
