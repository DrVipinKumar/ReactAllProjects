import React, { useEffect, useState } from "react";
import axios from "axios";
const FetchGetRequest = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${props.userName}`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.userName]);

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
          {!Array.isArray(users) && (
            <tr>
              <th scope="row">{users.id}</th>
              <th scope="row">{users.login}</th>
              <th scope="row">
                <img
                  src={users.avatar_url}
                  width="100px"
                  height="100px"
                  alt="Pic not found"
                ></img>
              </th>
            </tr>
          )}
          {Array.isArray(users) &&
            users.map((user) => {
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
};

export default FetchGetRequest;
