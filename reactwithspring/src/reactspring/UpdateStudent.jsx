import React, { Component } from "react";
import axios from "axios";
class UpdateStudent extends Component {
  state = {
    sid: "",
    name: "",
    course: "",
  };
  changeSid = (event) => {
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
      .put("http://localhost:8080/students", data)
      .then((response) => {
        alert("Record Updated");
      })
      .catch((error) => {
        alert(error);
      });
  };
  render() {
    const { sid, name, course } = this.state;
    return (
      <div className="badge bg-danger fs-6 mx-2">
        <h3>Update Student Information</h3>
        <form onSubmit={this.submitValue} className="text-start m-2">
          <label> Student ID:</label>
          <br />
          <input
            type="text"
            name="sid"
            value={sid}
            placeholder="Insert Student ID"
            onChange={this.changeSid}
          ></input>
          <br />
          <label> Student Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Insert Student Name"
            onChange={this.changeName}
          ></input>
          <br />
          <label> Student Course:</label>
          <br />
          <input
            type="text"
            name="course"
            value={course}
            placeholder="Insert Student Course"
            onChange={this.changeCourse}
          ></input>
          <br />
          <div className="text-center">
            <button
              className="btn btn-outline-warning btn-sm m-2"
              type="submit"
            >
              Update Student
            </button>
            <button
              onClick={this.props.closeUpdate}
              className="btn btn-outline-warning btn-sm m-2"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateStudent;
