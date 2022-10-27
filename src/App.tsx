import React from "react";
import "./App.css";

function hello() {
  debugger;
  alert("Hello world");
}
// hello();

function App() {
  return (
    <div>
      Hello world
      <Ration />
      <Accordion />
    </div>
  );
}

function Ration() {
  return (
    <div>
      <div>star</div>
      <div>star</div>
      <div>star</div>
      <div>star</div>
      <div>star</div>
    </div>
  );
}

function Accordion() {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
}
export default App;
