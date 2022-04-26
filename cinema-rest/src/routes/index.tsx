import React from "react";

import { Route, Routes } from "react-router-dom";

import Contact from "../pages/Contact";
import EditFilm from "../pages/EditFilm";
import FilmList from "../pages/FilmList";
import Home from "../pages/Home";

function PageRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/list" element={<FilmList />} />{" "}
        <Route path="/edit/:id" element={<EditFilm />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default PageRoutes;
