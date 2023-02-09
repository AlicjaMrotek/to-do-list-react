import React, { useEffect, useState } from "react";
import CreateNote from "./CreateNote";
import NotesContainer from "./NotesContainer";
import SearchBar from "./SearchBar";
import defaultNotes from "../defaultNotes";

function App() {

  //1. Ustawienie arraya z notatkami
  const [notes, setNotes] = useState(defaultNotes);

  //2. Dodawanie notatki; Funkcja przekazywana do komponentu CreateNote
  function addNewNote(newNote) {
    setNotes((prev) => [...prev, newNote]);
  }
  //3. Wyszukiwanie:  
  ////3.1 Use State dla wpisywanego zapytania
  const [searchQuery, setSearchQuery] = useState("");

  ////3.2 Use State dla wyników wyszukiwania
  const [results, setResults] = useState(notes);

  ////3.3 Funkcja przekazywana do komponentu SearchBar
  function handleSearch(queryText) {
    setSearchQuery(queryText);
  }

  ////3.4 Ustawienie setResultsów wyszukiwania za każdym razem kiedy nastąpi zmiana 'searchQuery' lub 'notes'
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

  //4. Kasowanie notki; Funkcja przekazywana do komponentu NotesContainer
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
