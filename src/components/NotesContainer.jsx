import React from "react";
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

function NotesContainer(props) {
  const {notes} = props;
  return (
    <div className="container-fluid">
      <div className="row">
        {notes.map((note) => {
          return (
            <div className="col-lg-4 col-md-6" key={note.id}>
              <div className="note">
                <h2>
                  {note.id}. {note.title}
                </h2>
                <p>{note.content}</p>
                <div className="buttons"><button className="delete-button"><ClearRoundedIcon fontSize="small"/></button></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NotesContainer;
