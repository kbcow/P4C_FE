import React, { useReducer } from "react";
import Group from "../assets/Group.png";
import "../styles/Frame.scss";
import BlackDot from "../assets/BlackDot.png";
import GreenDot from "../assets/GreenDot.png";
import YellowDot from "../assets/YellowDot.png";
import SkyDot from "../assets/SkyDot.png";
import PinkDot from "../assets/PinkDot.png";
import WhiteDot from "../assets/WhiteDot.png";
import RainbowDot from "../assets/RainbowDot.png";
import GrayDot from "../assets/GrayDot.png";
import { framesReducer, initialState, SELECTED_DOT } from "../reudcer/FramesReducer";

function Frames() {
  const [state, dispatch] = useReducer(framesReducer, initialState);
  console.log("state", state);

  return (
    <div className="frame-wrapper">
      <div className="left-group">
        <img src={Group} alt="group" />
      </div>

      <div className="right-dots">
        <h2 className="section-title">Picture</h2>
        <div className="top-dots">
          <img
            src={RainbowDot}
            alt="rainbow"
            className="small-dot"
            onClick={() => dispatch({ type: SELECTED_DOT, payload: "selectedRainbow" })}
          />
          <img
            src={GrayDot}
            alt="gray"
            className="small-dot"
            onClick={() => dispatch({ type: SELECTED_DOT, payload: "selectedGray" })}
          />
        </div>

        <h2 className="section-title">Frame</h2>
        <div className="dot-grid">
          <div className="dot-row">
            <img
              src={WhiteDot}
              alt="white"
              className="dot"
              onClick={() => dispatch({ type: SELECTED_DOT, payload: "selectedWhite" })}
            />
            <img
              src={SkyDot}
              alt="sky"
              className="dot"
              onClick={() => dispatch({ type: SELECTED_DOT, payload: "selectedSky" })}
            />
            <img
              src={PinkDot}
              alt="pink"
              className="dot"
              onClick={() => dispatch({ type: SELECTED_DOT, payload: "selectedPink" })}
            />
          </div>
          <div className="dot-row">
            <img
              src={YellowDot}
              alt="yellow"
              className="dot"
              onClick={() => dispatch({ type: SELECTED_DOT, payload: "selectedYellow" })}
            />
            <img
              src={GreenDot}
              alt="green"
              className="dot"
              onClick={() => dispatch({ type: SELECTED_DOT, payload: "selectedGreen" })}
            />
            <img
              src={BlackDot}
              alt="black"
              className="dot"
              onClick={() => dispatch({ type: SELECTED_DOT, payload: "selectedBlack" })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frames;
