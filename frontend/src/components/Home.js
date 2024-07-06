import React from "react";
import Notes from "./Notes.js";
import AddNotes from "./AddNotes.js";
function Home() {
  return (
    <>
      <div className="container my-2">
        <h1 className="text-center mb-4">Notes App</h1>

        <AddNotes />
        <Notes />
      </div>
    </>
  );
}
export default Home;
