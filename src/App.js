import React from "react";

import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://domonique-wilson-portfolio.netlify.app/about"
            target="_blank"
            rel="noreferrer"
          >
            Domonique Wilson
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/domoniquecodes/final-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
