import React from "react";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

function Note(props) {
  const { title, content, index, deleteFunc } = props;

  //1. Funkcja po kliknięciu delete buttona
  function handleClick() {
    //1.1 Odpalenie funckji z App
    deleteFunc(index);
    // function deleteNote(id) {
    //     setNotes(prevNotes => prevNotes.filter((note, index)=>{
    //       return index !== id
    //     }));
    //   };
  }

  return (
    <div className="col-lg-4 col-md-6" key={index}>
      <div className="note">
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="buttons">
          <button className="delete-button" onClick={handleClick}>
            <ClearRoundedIcon fontSize="small" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Note;
