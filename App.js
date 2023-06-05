import { useMemo, useState } from 'react';
import './App.css';

const DEFAULT_WEIGHT = 50;
const DEFAULT_HEIGHT = 150;

export default function App() {
  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [weight, setWeight] = useState(DEFAULT_WEIGHT);

  function onWeightChange(event) {
    const inputweight = event.target.value;
    setWeight(inputweight);
  }

  function onHeightChange(event) {
    const inputHeight = event.target.value;
    setHeight(inputHeight);
  }

  const output = useMemo(() => {
    const calculatedHeight = height / 100;
    return (weight / (calculatedHeight * calculatedHeight)).toFixed(1);
  }, [weight, height]);

  return (
    <main>
      <h1>MBI CALCULATOR</h1>
      <div className="input-section">
        <p className="slider-output">Weight: {weight} Kg</p>
        <input
          className="input-slider"
          onChange={onWeightChange}
          type="range"
          step="1"
          min="40"
          max="150"
          value={weight}
        />
      </div>
      <div className="input-section">
        <p className="slider-output">Height: {height} cm</p>
        <input
          className="input-slider"
          onChange={onHeightChange}
          type="range"
          step="1"
          min="100"
          max="200"
          value={height}
        />
      </div>
      <div className="output-section">
        <p>MBI: {output}</p>
      </div>
    </main>
  );
}
