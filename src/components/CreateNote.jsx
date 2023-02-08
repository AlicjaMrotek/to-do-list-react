import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Fab, TextField, Zoom } from "@mui/material";
import React, { useState } from "react";

function CreateNote(props) {
  const { newEntry } = props;

  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(true);
  }

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

  function addNote() {
    newEntry(entry);
    setEntry({
      title: "",
      content: "",
    });
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
