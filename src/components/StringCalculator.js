import React, { useState } from "react";
import { add } from "../utils";

export default function StringCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    try {
      setError("");
      setResult(add(input));
    } catch (e) {
      setError(e.message);
      setResult(null);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h1>String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers..."
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={handleCalculate}
        style={{
          padding: "10px 20px",
          backgroundColor: "green",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Calculate
      </button>
      {result !== null && <p>Result: {result}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
