import React from "react";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

function NotesContainer(props) {
  const { notes, delNote } = props;

  function handleClick(id) {
    delNote(id);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {notes.map((note, index) => {
          return (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="note">
                <h2>{note.title}</h2>
                <p>{note.content}</p>
                <div className="buttons">
                  <button className="delete-button" onClick={()=>handleClick(index)}>
                    <ClearRoundedIcon fontSize="small" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NotesContainer;
