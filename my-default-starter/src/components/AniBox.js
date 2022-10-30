import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import "./AniBox.css";

// React

export default function AniBox() {
  const [vis, Setvis] = useState(false);

  const transform = useTransition(vis, {
    from: { x: 800, y: -100, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1, width: 200, height: 200 },
    leave: { x: 800, y: 100, opacity: 0 }
  });
  const handleClick = () => {
    Setvis(!vis);
  };

  return (
    <div>
        <center><h3>Added Animations</h3></center>
        <div className="App">
        
        <center>
          <button onClick={handleClick}>{vis ? "unmount" : "mount"}</button>
        </center>
        <div className="container">
          {transform((style, item) =>
            item ? (
              <animated.div style={style} className="item"></animated.div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
}
