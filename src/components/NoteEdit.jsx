import React from "react";
import { TextField } from "@mui/material";

function NoteEdit(props) {
  const { editFunc, editedEntry } = props;

  return (
    <>
      <TextField
        name="title"
        value={editedEntry.title}
        id="standard-textarea"
        label="Title"
        multiline
        minRows={1}
        maxRows={2}
        variant="standard"
        onChange={editFunc}
      />
      <TextField
        name="content"
        value={editedEntry.content}
        id="standard-textarea"
        label="Note"
        multiline
        minRows={4}
        maxRows={10}
        variant="standard"
        onChange={editFunc}
      />
    </>
  );
}

export default NoteEdit;
