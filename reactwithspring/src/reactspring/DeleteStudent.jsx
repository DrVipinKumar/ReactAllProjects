import React, { Component } from "react";
import axios from "axios";
class DeleteStudent extends Component {
  state = {
    sid: "",
  };
  changeSid = (event) => {
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
      <div className="badge bg-danger fs-6 mx-2">
        <h3>Delete Student Information</h3>
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
          <div className="text-center">
            <button
              className="btn btn-outline-warning btn-sm m-2"
              type="submit"
            >
              Delete Student
            </button>
            <button
              onClick={this.props.closeDelete}
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

export default DeleteStudent;
