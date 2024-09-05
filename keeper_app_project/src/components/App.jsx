/*
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "../Note";

function App() {
  return (
    <div>
      <Header />
      <Note />   
      <Footer />
    </div>
  );
}

export default App;

// Don't apply <Note className="note"/>.
// It will not work here
*/

/*
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map(noteItem => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
*/

import React from "react";

function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;