import React, { useReducer } from "react";
import "../styles/Frame.scss";

import BlackFrames from "../assets/BlackFrame.png";
import WhiteFrame from "../assets/WhiteFrame.png";
import SkyFrame from "../assets/SkyFrame.png";
import PinkFrame from "../assets/PinkFrame.png";
import GreenFrame from "../assets/GreenFrame.png";
import YellowFrame from "../assets/YellowFrame.png";
import BlackDot from "../assets/BlackDot.png";
import GreenDot from "../assets/GreenDot.png";
import YellowDot from "../assets/YellowDot.png";
import SkyDot from "../assets/SkyDot.png";
import PinkDot from "../assets/PinkDot.png";
import WhiteDot from "../assets/WhiteDot.png";
import RainbowDot from "../assets/RainbowDot.png";
import GrayDot from "../assets/GrayDot.png";
import { framesReducer, initialState, setSelectedDot, setSelectedEffect } from "../reudcer/FramesReducer";

function Frames() {
  const [state, dispatch] = useReducer(framesReducer, initialState);

  console.log("useReducer", useReducer(framesReducer, initialState));
  const frameMap = {
    selectedWhite: WhiteFrame,
    selectedSky: SkyFrame,
    selectedPink: PinkFrame,
    selectedYellow: YellowFrame,
    selectedGreen: GreenFrame,
    selectedBlack: BlackFrames,
  };

  return (
    <div className="frame-wrapper">
      <div className="left-group">
        <div className="frame-stack">
          <img src={frameMap[state.selectedDot]} alt="frame" className="base-frame" />
        </div>
      </div>

      <div className="right-dots">
        <h2 className="section-title">Picture</h2>
        <div className="top-dots">
          <img
            src={RainbowDot}
            alt="rainbow"
            className="small-dot"
            onClick={() => dispatch(setSelectedEffect("RainbowEffect"))}
          />
          <img
            src={GrayDot}
            alt="gray"
            className="small-dot"
            onClick={() => dispatch(setSelectedEffect("GrayEffect"))}
          />
        </div>

        <h2 className="section-title">Frame</h2>
        <div className="dot-grid">
          <div className="dot-row">
            <img src={WhiteDot} alt="white" className="dot" onClick={() => dispatch(setSelectedDot("selectedWhite"))} />
            <img src={SkyDot} alt="sky" className="dot" onClick={() => dispatch(setSelectedDot("selectedSky"))} />
            <img src={PinkDot} alt="pink" className="dot" onClick={() => dispatch(setSelectedDot("selectedPink"))} />
          </div>
          <div className="dot-row">
            <img
              src={YellowDot}
              alt="yellow"
              className="dot"
              onClick={() => dispatch(setSelectedDot("selectedYellow"))}
            />
            <img src={GreenDot} alt="green" className="dot" onClick={() => dispatch(setSelectedDot("selectedGreen"))} />
            <img src={BlackDot} alt="black" className="dot" onClick={() => dispatch(setSelectedDot("selectedBlack"))} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frames;
