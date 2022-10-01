import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
  const name = "Dr Vipin Classes";
  const lang = [
    { id: "1", info: "Go Lang" },
    { id: "2", info: "Java" },
    { id: "3", info: "Kotlin" },
    { id: "4", info: "React" },
    { id: "5", info: "JavaScript" },
    { id: "6", info: "Android with Java" },
    { id: "7", info: "Android with Kotlin" },
    { id: "8", info: "Android with Jetpack Compose" },
  ];
  function conditionalRendering() {
    const lists =
      lang.length === 0 ? (
        <h1>List is Empty</h1>
      ) : (
        lang.map((lang) => <li key={lang.id}>{lang.info}</li>)
      );
    return lists;
  }
  return (
    //JSX is JavaScript XML
    <div className="App">
      <h1>Welcome at {name}</h1>
      <h2 style={{ textAlign: "left" }}>
        Watch videos of following playlist on my YouTube Channel
      </h2>
      <ul style={{ textAlign: "left" }}>{conditionalRendering()}</ul>
    </div>
  );
}

export default App;
