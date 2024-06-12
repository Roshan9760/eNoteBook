import { useState } from "react";
import NoteContext from "./notesContext";
import { addNotes, deleteNotes, editNotes, fetchNotes } from "../../utils/ApiRoutes";

const NoteState = (props) => {
  
  const initialNotes = [];
  const [notes, setNotes] = useState(initialNotes);

  // Get  all note
  const getNotes = async () => {
    // API Call
    const response = await fetch(fetchNotes, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    // this function returns promise so add "await" before it
    const json = await response.json();
    // console.log(json);
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {

    // API Call
    const response = await fetch(addNotes, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = await response.json()
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote =async (id) => {
    
    // API Call
    const response = await fetch(`${deleteNotes}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const json = await response.json();
    // console.log(json);

    // delete the note from frontend 
    // console.log("deleting the node of id " + id);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    // console.log("A note with id " + id + "has been deleted");
    setNotes(newNote);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${editNotes}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();
    // console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
