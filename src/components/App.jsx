import React, { useEffect, useState } from "react";
import CreateNote from "./CreateNote";
import NotesContainer from "./NotesContainer";
import SearchBar from "./SearchBar";
// import notes from "../notes";

function App() {
  const [notes, setNotes] = useState([]);

  function addNewNote(newNote) {
    setNotes((prev) => [...prev, newNote]);
  }

  const [results, setResults] = useState(notes);

  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch(queryText) {
    setSearchQuery(queryText);
  }

  useEffect(() => {
    searchQuery.length !== 0
      ? setResults(() =>
          notes.filter((note) => {
            const title = note.title.toLowerCase();
            const content = note.content.toLowerCase();
            const queryLC = searchQuery.toLowerCase();
            return title.includes(queryLC) || content.includes(queryLC);
          })
        )
      : setResults(notes);
  }, [searchQuery, notes]);

  return (
    <div>
      <SearchBar query={handleSearch} value={searchQuery} />
      <CreateNote newEntry={addNewNote} />
      <NotesContainer notes={results} />
    </div>
  );
}

export default App;
