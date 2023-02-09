import React from "react";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

function NotesContainer(props) {
  const { notes, delNote } = props;

  //1. Funkcja po kliknięciu delete buttona
  function handleClick(id) {
    //1.1 Odpalenie funckji z App 
    delNote(id);
    // function deleteNote(id) {
    //   setNotes(prevNotes => prevNotes.filter((note, index)=>{
    //     return index !== id
    //   }));
    // };
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
        }).reverse()}
      </div>
    </div>
  );
}

export default NotesContainer;
