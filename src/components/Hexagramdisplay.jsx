import React from "react";

const HexagramDisplay = ({ hexagram }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Hexagram</h2>
      <div style={{ display: "flex", flexDirection: "column-reverse" }}>
        {hexagram.map((line, index) => (
          <div key={index} style={{ fontSize: "20px" }}>
            {line === "yang" ? "━━━" : "━ ━"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HexagramDisplay;
