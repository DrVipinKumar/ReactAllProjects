import React, { Component } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";

class PostStudents extends Component {
  state = {
    sid: "",
    name: "",
    course: "",
  };
  changeSID = (event) => {
    this.setState({
      sid: event.target.value,
    });
  };
  changeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  changeCourse = (event) => {
    this.setState({
      course: event.target.value,
    });
  };
  submitValue = (event) => {
    const data = this.state;
    event.preventDefault();
    axios
      .post("http://localhost:8080/students", data)
      .then((response) => {
        alert("Student Inserted");
      })
      .catch((error) => {
        <Alert variant="danger" show={true}>
          Student not Inserted
        </Alert>;
      });
  };
  render() {
    const { sid, name, course } = this.state;
    return (
      <div className="badge bg-danger text-center fs-6 m-4">
        <h2>Enter Student Information</h2>
        <br />
        <form className="text-start fs-6" onSubmit={this.submitValue}>
          <label>Student ID:</label>
          <br />
          <input
            type="text"
            name="sid"
            placeholder="Student ID"
            value={sid}
            onChange={this.changeSID}
            size="100px"
          />
          <br />
          <br />
          <label>Student Name:</label>
          <br />
          <input
            type="text"
            name="sid"
            placeholder="Student Name"
            value={name}
            onChange={this.changeName}
          />
          <br />
          <br />
          <label>Student Course:</label>
          <br />
          <input
            type="text"
            name="sid"
            placeholder="Student Course"
            value={course}
            onChange={this.changeCourse}
          />
          <br />
          <br />
          <div className="text-center">
            <button
              className="btn btn-outline-warning btn-sm m-2 fs-4"
              type="submit"
            >
              Save Student
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostStudents;
