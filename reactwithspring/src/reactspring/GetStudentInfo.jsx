import React, { Component } from "react";
import axios from "axios";
class GetStudentInfo extends Component {
  state = {
    students: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:8080/students")
      .then((response) => {
        this.setState({
          students: response.data,
        });
      })
      .catch((error) => {
        alert(error);
      });
  }
  render() {
    return (
      <div className="text-center fs-6 mx-5">
        <div className="text-end">
          <button
            className="btn btn-danger btn-sm"
            onClick={this.props.closeGet}
          >
            Close
          </button>
        </div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Student ID</th>
              <th scope="col">Student Name</th>
              <th scope="col">Student Course</th>
            </tr>
          </thead>
          <tbody className="table table-warning">
            {this.state.students.map((student) => {
              return (
                <tr>
                  <th scope="row">{student.sid}</th>
                  <th scope="row">{student.name}</th>
                  <th scope="row">{student.course}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GetStudentInfo;
