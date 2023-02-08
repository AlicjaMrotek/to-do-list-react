import React, { useState } from "react";
import CreateNote from "./CreateNote";
import NotesContainer from "./NotesContainer";
import SearchBar from "./SearchBar";
import notes from "../notes";

function App() {
  const [results, setResults] = useState(notes);
  function search(queryText) {
    queryText.length !== 0
      ? setResults(() =>
          notes.filter((note) => {
            const title = note.title.toLowerCase();
            const content = note.content.toLowerCase();
            const queryLC = queryText.toLowerCase();
            return title.includes(queryLC) || content.includes(queryLC);
          })
        )
      : setResults(notes);
  }



  return (
    <div>
      <SearchBar query={search} />
      <CreateNote />
      <NotesContainer notes={results} />
    </div>
  );
}

export default App;
