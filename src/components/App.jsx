import React, { useEffect, useState } from "react";
import CreateNote from "./CreateNote";
import NotesContainer from "./NotesContainer";
import SearchBar from "./SearchBar";
import defaultNotes from "../defaultNotes";

function App() {
  const [notes, setNotes] = useState(defaultNotes);

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


  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter((note, index)=>{
      return index !== id
    }));
  };

  return (
    <div>
      <SearchBar query={handleSearch} value={searchQuery} />
      <CreateNote newEntry={addNewNote} />
      <NotesContainer notes={results} delNote={deleteNote}/>
    </div>
  );
}

export default App;
