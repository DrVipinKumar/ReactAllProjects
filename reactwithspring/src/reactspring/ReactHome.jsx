import React, { Component } from "react";
import GetStudentInfo from "./GetStudentInfo";
import InsertStudent from "./InsertStudent";
import UpdateStudent from "./UpdateStudent";
import DeleteStudent from "./DeleteStudent";

class ReactHome extends Component {
  state = {
    get: true,
    post: false,
    put: false,
    del: false,
  };
  openGet = () => {
    this.setState({
      get: true,
      post: false,
      put: false,
      del: false,
    });
  };
  closeGet = () => {
    this.setState({
      get: true,
      post: false,
      put: false,
      del: false,
    });
  };
  openInsert = () => {
    this.setState({
      get: false,
      post: true,
      put: false,
      del: false,
    });
  };
  closeInsert = () => {
    this.setState({
      get: true,
      post: false,
      put: false,
      del: false,
    });
  };
  openUpdate = () => {
    this.setState({
      get: false,
      post: false,
      put: true,
      del: false,
    });
  };
  closeUpdate = () => {
    this.setState({
      get: true,
      post: false,
      put: false,
      del: false,
    });
  };
  openDelete = () => {
    this.setState({
      get: false,
      post: false,
      put: false,
      del: true,
    });
  };
  closeDelete = () => {
    this.setState({
      get: true,
      post: false,
      put: false,
      del: false,
    });
  };

  render() {
    const { get, post, put, del } = this.state;
    return (
      <div className="badge bg-primary m-4 text-center fs-1 col-10">
        <h3>React as Frontend for Spring Boot REST API</h3>
        {get && <GetStudentInfo closeGet={this.closeGet} />}
        {get && <br />}
        {post && <InsertStudent closeInsert={this.closeInsert} />}
        {post && <br />}
        {put && <UpdateStudent closeUpdate={this.closeUpdate} />}
        {put && <br />}
        {del && <DeleteStudent closeDelete={this.closeDelete} />}
        {del && <br />}
        <button onClick={this.openGet} className="btn btn-light m-2 fs-6 col-2">
          Get Student
        </button>
        <button
          onClick={this.openInsert}
          className="btn btn-light m-2 fs-6 col-2"
        >
          Insert Student
        </button>
        <button
          onClick={this.openUpdate}
          className="btn btn-light m-2 fs-6 col-2"
        >
          Update Student
        </button>
        <button
          onClick={this.openDelete}
          className="btn btn-light m-2 fs-6 col-2"
        >
          Delete Student
        </button>
      </div>
    );
  }
}

export default ReactHome;
