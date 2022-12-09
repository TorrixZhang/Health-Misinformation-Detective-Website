import ExpertHeader from "./NavComponents/navExpertSign";
import bgVideo from "../images/bg.mp4";
import { Link } from "react-router-dom";

const bgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
  top: "0",
  left: "0",
  zIndex: "-999",
};

export default function ExpertHome() {
  return (
    <div>
      <ExpertHeader />
      <div>
        <video
          src={bgVideo}
          style={bgStyle}
          autoplay="autoplay"
          loop="loop"
          muted="muted"
        ></video>
        <h2 id="button">
          <Link to="/article">Explore</Link>
        </h2>
      </div>
    </div>
  );
}
