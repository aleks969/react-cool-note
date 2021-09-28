import React, { useState } from "react";
import "./App.css";

function App() {
  const storage = window.localStorage;
  const prevText = localStorage.getItem("textarea-input");
  const [text, setText] = useState(prevText ? prevText : "");

  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea
              className="textarea is-large"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Notes..."
            />
          </div>
        </div>
        <button
          className="button is-large is-primary is-active"
          onClick={() => {
            storage.setItem("textarea-input", text);
          }}
        >
          Save
        </button>
        <button
          className="button is-large"
          onClick={() => {
            storage.removeItem("textarea-input");
            setText("");
          }}
        >
          Clear
        </button>
        <button
          className="button is-large"
          onClick={() => {
            const item = storage.getItem("textarea-input");
            console.log(item);
            setText(item);
          }}
        >
          Get
        </button>
      </div>
    </div>
  );
}

export default App;
