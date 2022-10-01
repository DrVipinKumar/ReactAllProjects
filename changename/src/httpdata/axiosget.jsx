import React, { Component } from "react";
import axios from "axios";
class GetAxios extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    axios
      .get("https://api.github.com/users")
      .then((response) => {
        this.setState({
          users: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    console.log(this.state.users);
    return (
      <div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">User ID</th>
              <th scope="col">User Name</th>
              <th scope="col">User Photo</th>
            </tr>
          </thead>
          <tbody className="table table-warning">
            {this.state.users.map((user) => {
              return (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <th scope="row">{user.login}</th>
                  <th scope="row">
                    <img
                      src={user.avatar_url}
                      width="100px"
                      height="100px"
                      alt="Pic not found"
                    ></img>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GetAxios;
