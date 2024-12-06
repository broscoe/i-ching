import React, { useState } from "react";
import HexagramDisplay from "./components/Hexagramdisplay";
import Interpretation from "./components/Interpretation";

const App = () => {
  const [primaryHexagram, setPrimaryHexagram] = useState([]);
  const [secondaryHexagram, setSecondaryHexagram] = useState([]);
  const [changingLines, setChangingLines] = useState([]);

  const castHexagram = () => {
    const primary = [];
    const changes = [];

    for (let i = 0; i < 6; i++) {
      const toss = Math.floor(Math.random() * 4); // Random 0-3
      if (toss === 0) {
        primary.push("yang");
        changes.push(i); // Old yang changes to yin
      } else if (toss === 1) {
        primary.push("yang"); // Stable yang
      } else if (toss === 2) {
        primary.push("yin");
        changes.push(i); // Old yin changes to yang
      } else if (toss === 3) {
        primary.push("yin"); // Stable yin
      }
    }

    // Reverse for traditional display (top line is last in array)
    const primaryReversed = [...primary].reverse();

    // Generate secondary hexagram by flipping lines at changing positions
    const secondary = [...primary];
    changes.forEach((index) => {
      secondary[index] = secondary[index] === "yang" ? "yin" : "yang";
    });
    const secondaryReversed = [...secondary].reverse();

    setPrimaryHexagram(primaryReversed);
    setSecondaryHexagram(secondaryReversed);
    setChangingLines(changes.reverse());
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>I Ching Reader</h1>
      <button onClick={castHexagram}>Cast Hexagram</button>
      {primaryHexagram.length > 0 && (
        <>
          <HexagramDisplay title="Primary Hexagram" hexagram={primaryHexagram} />
          <Interpretation
            hexagram={primaryHexagram}
            changingLines={changingLines}
          />
          {secondaryHexagram.length > 0 && (
            <>
              <HexagramDisplay
                title="Secondary Hexagram"
                hexagram={secondaryHexagram}
              />
              <Interpretation hexagram={secondaryHexagram} changingLines={[]} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default App;
