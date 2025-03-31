import React, { useEffect } from "react";
import Home from "./pages/Home";
import Frames from "./pages/Frames";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const homeContents = [
    { id: 1, contents: "순간을 4컷에 담아," },
    { id: 2, contents: "가장 나다운 기록" },
  ];
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home contents={homeContents} />} />
        <Route path="/Frames" element={<Frames />} />
      </Routes>
    </Router>
  );
}

export default App;
