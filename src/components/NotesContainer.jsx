import { Grid } from "@mui/material";
import React, { useState } from "react";
import Note from "./Note";

function NotesContainer(props) {
  const { notes, delNote, editNote } = props;

  //Stan widoczności przycisków do usuwania i edycji dla wszystkich notek
  const [buttVis, setButtVis] = useState(true);
  //Funkcja zmieniająca stan widoczności przycisków do usuwania i edycji dla wszystkich notek
  function checkVisibility() {
    setButtVis((prev) => !prev);
  }

  return (
    <Grid container spacing={2}>
      {notes
        .map((note, index) => {
          return (
            <Note
              key={index}
              index={index}
              title={note.title}
              content={note.content}
              // funkcja delete jest zwyczajnie przesuwana do komponentu niżej:
              deleteFunc={delNote}
              // funkcja edit jest zwyczajnie przesuwana do komponentu niżej:
              editFunc={editNote}
              // przekazuje do odpalenia funckję zmieniającą widoczność buttonów
              checkVisibility={checkVisibility}
              //przekazuje stan widoczności buttonów ustalony dla wszystkich notek
              buttonVisibility={buttVis}
            />
          );
        })
        .reverse()}
    </Grid>
  );
}

export default NotesContainer;
