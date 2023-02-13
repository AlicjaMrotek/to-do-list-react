import React, { useState } from "react";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { Grid } from "@mui/material";
import NotePreview from "./NotePreview";
import NoteEdit from "./NoteEdit";

function Note(props) {
  const {
    title,
    content,
    index,
    deleteFunc,
    editFunc,
    buttonVisibility,
    checkVisibility,
  } = props;

  //1. Funkcja po kliknięciu delete buttona
  function handleClickDel() {
    //1.1 Odpalenie funckji z App
    deleteFunc(index);
    // function deleteNote(id) {
    //     setNotes(prevNotes => prevNotes.filter((note, index)=>{
    //       return index !== id
    //     }));
    //   };
  }

  //2. Sprawdzenie czy kliknięty przycisk edycji
  const [isThisEditing, setIsThisEditing] = useState(false);

  //3. USUWANIE
  //3.1 Funkcja po kliknięciu edit buttona
  function handleClickEdit() {
    //3.2 Odpalenie funkcji z App
    checkVisibility();
    //3.3 Ustawia clicked na 'true'
    setIsThisEditing(true);
  }

  //4. EDYCJA
  //4.1 Stan pierwotny edytowanego wpisu
  const [editedEntry, setEditedEntry] = useState({
    title: title,
    content: content,
  });

  //4.2 Ustawienie nowego stanu wpisu
  function onEditChange(event) {
    const { name, value } = event.target;
    setEditedEntry((prev) => {
      return { ...prev, [name]: value };
    });
  }

  //4.3 Funkcja po kliknięciu confirm change buttona
  function handleClickConfirm() {
    //4.3.1 Odpalenie funkcji z App:
    editFunc(index, editedEntry);
    // function editNote(id, newNote) {
    //   setNotes(prevNotes => {
    //     const newNotes = [...prevNotes];
    //     newNotes[id] = newNote;
    //     return newNotes;
    //   })
    // };

    //4.3.2 Odpalenie funkcji z App do widoczności przycisków z innych notek
    checkVisibility();

    //4.3.3 Powrót do stanu nie-edycji
    setIsThisEditing(false);
  }

  return (
    <Grid item md={6} lg={4} key={index}>
      <div className="note">
        {isThisEditing ? (
          <NoteEdit
            title={title}
            content={content}
            editFunc={onEditChange}
            editedEntry={editedEntry}
          />
        ) : (
          <NotePreview title={title} content={content} />
        )}

        <div className="buttons">
          {buttonVisibility && !isThisEditing && (
            <>
              <button className="update-button" onClick={handleClickEdit}>
                <EditRoundedIcon fontSize="small" />
              </button>
              <button className="update-button" onClick={handleClickDel}>
                <ClearRoundedIcon fontSize="small" />
              </button>
            </>
          )}

          {isThisEditing && (
            <button className="update-button" onClick={handleClickConfirm}>
              <CheckRoundedIcon fontSize="small" />
            </button>
          )}
        </div>
      </div>
    </Grid>
  );
}

export default Note;
