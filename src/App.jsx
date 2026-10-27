
import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";

// 1. Division by zero
function Division() {
  const a = 10;
  const b = 0;

  if (b === 0) {
    throw new Error("Division by zero");
  }

  return <h3>Result: {a / b}</h3>;
}

// 2. Array index out of bounds
function ArrayExample() {
  const numbers = [10, 20, 30];
  const index = 5;

  if (index < 0 || index >= numbers.length) {
    throw new Error("Array index out of bounds");
  }

  return <h3>Value: {numbers[index]}</h3>;
}

function App() {
  return (
    <div className="container">
      <h1>React Error Boundary Demo</h1>

      <div className="card">
        <h2>1. Division by Zero</h2>
        <ErrorBoundary message="Division by zero error!">
          <Division />
        </ErrorBoundary>
      </div>

      <div className="card">
        <h2>2. Array Index Out of Bounds</h2>
        <ErrorBoundary message="Array index out of bounds!">
          <ArrayExample />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
