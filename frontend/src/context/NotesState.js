import React from "react";
import NoteContext from "./noteContext";

const NoteStateProvider = (props) => {
    const initialState = [];
    const [notes, setNotes] = React.useState(initialState);

    const getNotes = async () => {
        try {
            const response = await fetch("https://backend-inote-50l6.onrender.com/api/notes/fetchAllNotes", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': localStorage.getItem('accessToken')
                }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const json = await response.json();
            setNotes(json);
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    };

    const addNote = async (note) => {
        try {
            const response = await fetch("https://backend-inote-50l6.onrender.com/api/notes/addNotes", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': localStorage.getItem('accessToken')
                },
                body: JSON.stringify(note)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const newNote = await response.json();
            setNotes(notes.concat(newNote));
        } catch (error) {
            console.error("Error adding note:", error);
        }
    };

    const deleteNote = async (id) => {
        try {
            const response = await fetch(`https://backend-inote-50l6.onrender.com/api/notes/deleteNote/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': localStorage.getItem('accessToken')
                }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            setNotes(notes.filter((note) => note._id !== id));
        } catch (error) {
            console.error("Error deleting note:", error);
        }
    };

    const editNote = async (id, title, description, tag) => {
        try {
            const response = await fetch(`https://backend-inote-50l6.onrender.com/api/notes/updateNote/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': localStorage.getItem('accessToken')
                },
                body: JSON.stringify({ title, description, tag })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const updatedNote = await response.json();
            setNotes(notes.map(note => note._id === id ? updatedNote : note));
        } catch (error) {
            console.error("Error editing note:", error);
        }
    };

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteStateProvider;
