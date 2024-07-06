import React, { useContext } from "react";
import NoteContext from "../context/noteContext.js";

function NoteItem(props) {
  const a = useContext(NoteContext);
  const { deleteNote } = a;
  const { note, updateNote } = props;
  return (
    <>
      <div className="d-flex flex-row mb-3 justify-content-center">
        <div className="card my-3" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <h6 className="card-title">{note.tag}</h6>
            <button
              className="btn btn-primary btn-sm mx-1"
              onClick={() => {
                updateNote(note);
              }}
            >
              Update
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => {
                deleteNote(note._id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default NoteItem;
