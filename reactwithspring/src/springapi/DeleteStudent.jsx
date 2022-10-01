import React, { Component } from "react";
import axios from "axios";
class DeleteStudents extends Component {
  state = {
    sid: "",
  };
  changeSID = (event) => {
    this.setState({
      sid: event.target.value,
    });
  };

  submitValue = (event) => {
    const sid = this.state.sid;
    event.preventDefault();
    axios
      .delete(`http://localhost:8080/students/${sid}`)
      .then((response) => {
        alert("Record Deleted");
      })
      .catch((error) => {
        alert(error);
      });
  };
  render() {
    const { sid } = this.state;
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
          <div className="text-center">
            <button
              className="btn btn-outline-warning btn-sm m-2 fs-4"
              type="submit"
            >
              Delete Student
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default DeleteStudents;
