import React, { createElement } from "react";
const emojipedia = require("../emojipedia");
const Element = require("./Element");

function CreateElement(element) {
  return (
    <Element
      key={element.id}
      name={element.name}
      emoji={element.emoji}
      meaning={element.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(CreateElement)}</dl>
    </div>
  );
}

export default App;
