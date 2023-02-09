import React from "react";
import Note from "./Note";

function NotesContainer(props) {
  const { notes, delNote } = props;

  return (
    <div className="container-fluid">
      <div className="row">
        {notes
          .map((note, index) => {
            return (
              <Note
                index={index}
                title={note.title}
                content={note.content}
                // funkcja delete jest zwyczajnie przesuwana do komponentu niżej:
                deleteFunc={delNote} />
            );
          })
          .reverse()}
      </div>
    </div>
  );
}

export default NotesContainer;
