import React, { Component } from "react";
class FetchData extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    fetch("https://api.github.com/users")
      .then((response) => {
        response.json().then((data) => {
          this.setState({
            users: data,
          });
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
        <table className="table table-success">
          <thead className="table table-warning">
            <tr>
              <th scope="col">User ID</th>
              <th scope="col">User Name</th>
              <th scope="col">User Photo</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {this.state.users.map((user) => {
              return (
                <tr key={user.id} style={{ verticalAlign: "middle" }}>
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

export default FetchData;
