import React from "react";
import "../styles/Button.scss";
import { useNavigate } from "react-router-dom";

function Button({ title }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Frames");
  };

  const sendToElectron = () => {
    if (window.electronAPI) {
      window.electronAPI.sendMessage("React에서 보냄!");
    }
  };
  return (
    // <button className="button" onClick={sendToElectron}>
    //   {title}
    // </button>
    <button className="button" onClick={handleClick}>
      {title}
    </button>
  );
}

export default Button;
