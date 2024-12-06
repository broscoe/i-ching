import React, { useState } from "react";
import hexagramText from "./hexagramText";

const App = () => {
  const [selectedHexagrams, setSelectedHexagrams] = useState(null);

  const generateHexagrams = () => {
    // Generate primary hexagram
    const hexagram = Array.from({ length: 6 }, () => Math.round(Math.random()));
    
    // Generate secondary hexagram by changing lines
    const changingLines = hexagram.map((line) => (Math.random() < 0.5 ? 1 - line : line));
    const primaryHexagram = hexagram.join("");
    const secondaryHexagram = changingLines.join("");

    setSelectedHexagrams([primaryHexagram, secondaryHexagram]);
  };

  const renderHexagram = (hexagram, label) => {
    const hexData = hexagramText[hexagram];
    if (!hexData) return <div>Invalid Hexagram</div>;

    return (
      <div style={{ marginBottom: "20px" }}>
        <h2>{label}</h2>
        <h3>{hexData.name}</h3>
        <p><strong>Meaning:</strong> {hexData.meaning}</p>
        <h4>Lines:</h4>
        <ul>
          {hexData.lines.map((line, index) => (
            <li key={index}><strong>Line {index + 1}:</strong> {line}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>I Ching Reader</h1>
      <button onClick={generateHexagrams} style={{ marginBottom: "20px", padding: "10px 15px", fontSize: "16px" }}>
        Generate Hexagrams
      </button>
      {selectedHexagrams && (
        <>
          {renderHexagram(selectedHexagrams[0], "Current Situation (Primary Hexagram)")}
          {renderHexagram(selectedHexagrams[1], "Future Situation (Secondary Hexagram)")}
        </>
      )}
    </div>
  );
};

export default App;
