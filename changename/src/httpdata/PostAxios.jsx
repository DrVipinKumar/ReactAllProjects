import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class PostAxios extends Component {
  state = {
    sid: "",
    name: "",
    course: "",
  };
  setSID = (event) => {
    this.setState({
      sid: event.target.value,
    });
  };
  setName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  setCourse = (event) => {
    this.setState({
      course: event.target.value,
    });
  };
  submitStudnetInfo = (event) => {
    event.preventDefault();
    const data = this.state;
    axios
      .post("http://localhost:8080/students", data)
      .then((response) => {
        toast.success("Record Inserted", {
          position: "top-center",
        });
      })
      .catch((error) => {
        toast.error("Record not Inserted", {
          position: "top-center",
        });
      });
  };
  render() {
    const { sid, name, course } = this.state;
    return (
      <div className="badge bg-primary my-5 text-center">
        <h2>Insert Student Information</h2>
        <form className="fs-6" onSubmit={this.submitStudnetInfo}>
          <br />
          <div className="text-start mx-5">
            <label>Student ID</label>
          </div>
          <input
            type="text"
            value={sid}
            onChange={this.setSID}
            name="sid"
            className="col-8"
          ></input>
          <br />
          <br />
          <div className="text-start mx-5">
            <label>Student Name</label>
          </div>

          <input
            type="text"
            value={name}
            onChange={this.setName}
            name="name"
            className="col-8"
          ></input>
          <br />
          <br />
          <div className="text-start mx-5">
            <label>Student Course</label>
          </div>
          <input
            type="text"
            value={course}
            onChange={this.setCourse}
            name="course"
            className="col-8"
          ></input>
          <br />
          <br />
          <button type="submit" className="btn btn-danger btn-sm">
            Save Information
          </button>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default PostAxios;
