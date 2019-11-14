import React from "react";
import ReactDOM from "react-dom";
import BreakpointsTest from "./components/BreakpointsTest";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Breakpoints</h1>
      <BreakpointsTest />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
