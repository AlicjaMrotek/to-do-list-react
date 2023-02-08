import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Fab, TextField, Zoom } from "@mui/material";
import React, { useState } from "react";

function CreateNote() {

  function handleChange(props) {}

  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(true);
  }

  function addNote() {
    setIsClicked(false);
  }

  return (
    <div className="create-note">
      {isClicked && (
        <TextField
          id="standard-textarea"
          label="Title"
          multiline
          variant="standard"
          onChange={handleChange}
        />
      )}

      <TextField
        id="standard-textarea"
        label="Create a note"
        multiline
        rows={isClicked && 4}
        variant="standard"
        onClick={handleClick}
        onChange={handleChange}
      />
      {isClicked && <div className="buttons">
        <Zoom in={isClicked}>
          <Fab>
            <AddCircleIcon sx={{ fontSize: 32 }} onClick={addNote}/>
          </Fab>
        </Zoom>
      </div>}
    </div>
  );
}

export default CreateNote;
