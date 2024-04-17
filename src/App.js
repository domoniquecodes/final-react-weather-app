import React from "react";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <footer>
          This project was coded by{" "}
          <a
            href="https://domonique-wilson-portfolio.netlify.app/about"
            target="_blank"
          >
            Domonique Wilson
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/domoniquecodes/final-react-weather-app"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
