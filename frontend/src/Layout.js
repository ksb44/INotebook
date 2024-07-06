import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import NoteStateProvider from "./context/NotesState.js";
function Layout() {
  return (
    <>
      <NoteStateProvider>
        <Navbar />

        <Outlet />
      </NoteStateProvider>
    </>
  );
}

export default Layout;
