import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import DeleteStudents from "./DeleteStudent";
import GetStudents from "./GetStudent";
import PostStudents from "./PostStudent";
import PutStudents from "./PutStudent";
class HomeRest extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<GetStudents />}></Route>
        <Route path="/post" element={<PostStudents />}></Route>
        <Route path="/put" element={<PutStudents />}></Route>
        <Route path="/delete" element={<DeleteStudents />}></Route>
      </Routes>
    );
  }
}

export default HomeRest;
