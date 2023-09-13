import React, { useState } from "react";
import "./App.css";
import { reelData } from "./reelData/reelData";
import Video from "./components/Video/Video";

export default function App() {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="App">
      <div className="video-wrapper">
        <h3>Reel</h3>
        <div className="reels">
          <div className="video-container" id="video-container">
            {reelData?.map((list, i) => (
              <Video
                key={i}
                data={list}
                setIsMuted={setIsMuted}
                isMuted={isMuted}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
