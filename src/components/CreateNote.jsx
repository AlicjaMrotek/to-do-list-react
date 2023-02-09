import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Fab, TextField, Zoom } from "@mui/material";
import React, { useState } from "react";

function CreateNote(props) {
  const { newEntry } = props;

  //1. Use State dla kliknięcia okienka 'Create note...' - rozsuwanie
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked(true);
  }

  //2. Use State dla utworzenia nowego wpisu
  const [entry, setEntry] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setEntry((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  //3. Funkcja po kliknięciu buttona "+"
  function addNote() {
    //3.1 Wywołanie funkcji z App:
    newEntry(entry);
    //function addNewNote(newNote) {
    //  setNotes((prev) => [...prev, newNote]);
    //}

    //3.2 Wyzerowanie formularza
    setEntry({
      title: "",
      content: "",
    });

    //3.3 Schowanie formularza
    setIsClicked(false);
  }

  return (
    <div className="create-note">
      {isClicked && (
        <TextField
          name="title"
          value={entry.title}
          id="standard-textarea"
          label="Title"
          multiline
          variant="standard"
          onChange={handleChange}
        />
      )}

      <TextField
        name="content"
        value={entry.content}
        id="standard-textarea"
        label="Create a note"
        multiline
        rows={isClicked && 4}
        variant="standard"
        onClick={handleClick}
        onChange={handleChange}
      />
      {isClicked && (
        <div className="buttons">
          <Zoom in={isClicked}>
            <Fab>
              <AddCircleIcon sx={{ fontSize: 32 }} onClick={addNote} />
            </Fab>
          </Zoom>
        </div>
      )}
    </div>
  );
}

export default CreateNote;
