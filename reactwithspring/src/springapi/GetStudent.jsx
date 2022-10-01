import React, { Component } from "react";
import axios from "axios";
class GetStudents extends Component {
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
        console.log(error);
      });
  }
  render() {
    console.log(this.state.students);
    return (
      <div className="text-center fs-6 m-4">
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

export default GetStudents;
