import React, { useContext } from "react";
import noteContext from "../context/notes/notesContext";

const Noteitem = (props) => {
  const { note, updateNote } = props;
  const context = useContext(noteContext)
  const { deleteNote } = context;

  // delete handler
  // const deleteHandler = ()=>{
  //       deleteNote(note._id);
  // }
  return (
    <div className="col-md-3  ">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title} </h5>
          <p className="card-text">{note.description} </p>
          <div className="d-flex align-item-centre justify-content-between ">
            <i className="fa-solid fa-trash" onClick={()=>{deleteNote(note._id)}}></i>
            <i className="fa-solid fa-pen-to-square"  onClick={()=>{updateNote(note);}}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
