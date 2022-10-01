import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class InsertStudent extends Component {
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
      .post("http://localhost:8080/students", data)
      .then((response) => {
        toast.success("Record Inserted", {
          position: "top-center",
        });
      })
      .catch((error) => {
        toast.error("Record not Inserted", {
          position: "bottom-center",
        });
      });
  };
  render() {
    const { sid, name, course } = this.state;
    return (
      <div className="badge bg-danger fs-6 mx-2">
        <h3>Insert Student Information</h3>
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
              Insert Student
            </button>
            <button
              onClick={this.props.closeInsert}
              className="btn btn-outline-warning btn-sm m-2"
            >
              Close
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    );
  }
}

export default InsertStudent;
