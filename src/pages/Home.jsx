import React, { useEffect } from "react";
import "../styles/home.scss";
import Button from "../components/Button";
import "../styles/Text.scss";
import RightFrame from "../assets/HomeImageFrameRight.png";
import LeftFrame from "../assets/HomeImageFrameLeft.png";

// P4C_FE/public/imageFrame.png
// P4C_FE/src/pages/Home.jsx

function Home(props) {
  useEffect(() => {
    if (window.electronAPI) {
      window.electronAPI.onMessage((data) => {
        console.log("📨 Electron에서 보낸 응답:", data);
      });
    }
  }, []);

  const list = [];
  props.contents.map((item, index) => {
    list.push(item);
  });

  return (
    <div className="home-container">
      <div className="image-side">
        <div className="frame-container">
          <img src={LeftFrame} alt="frame" className="leftframe" />
          <img src={RightFrame} alt="frame" className="rightframe" />
        </div>
      </div>

      <div className="button-side">
        <div className="text" style={{ marginBottom: "20px" }}>
          {props.contents[0]?.contents}
        </div>
        <div className="text" style={{ marginBottom: "20px" }}>
          {props.contents[1]?.contents}
        </div>
        <Button title="START" />
      </div>
    </div>
  );
}

export default Home;
