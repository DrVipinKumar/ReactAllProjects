import React, { Component } from "react";
import axios from "axios";
class GetData extends Component {
  state = { users: [] };
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
    return (
      <div>
        <table className="table table-success">
          <thead className="table table-dark">
            <tr>
              <th scope="col">User ID</th>
              <th scope="col">User Name</th>
              <th scope="col">User Photo</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => {
              return (
                <tr style={{ verticalAlign: "middle" }}>
                  <th scope="row" key={user.id}>
                    {user.id}
                  </th>
                  <th scope="row" key={user.id}>
                    {user.login}
                  </th>
                  <th scope="row" key={user.id}>
                    <img
                      src={user.avatar_url}
                      with="100px"
                      height="100px"
                      alt="Pic is not found"
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

export default GetData;
