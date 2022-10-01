import React, { Component } from "react";
import GetStudents from "./GetStudent";
import PostStudents from "./PostStudent";
import PutStudents from "./PutStudent";
import DeleteStudents from "./DeleteStudent";
import { Button, Modal } from "react-bootstrap";
class RestHome extends Component {
  state = {
    get: false,
    post: false,
    put: false,
    del: false,
  };
  openGet = () => {
    this.setState({
      get: true,
    });
  };
  closeGet = () => {
    this.setState({
      get: false,
    });
  };
  openPost = () => {
    this.setState({
      post: true,
    });
  };
  closePost = () => {
    this.setState({
      post: false,
    });
  };
  openPut = () => {
    this.setState({
      put: true,
    });
  };
  closePut = () => {
    this.setState({
      put: false,
    });
  };
  openDel = () => {
    this.setState({
      del: true,
    });
  };
  closeDel = () => {
    this.setState({
      del: false,
    });
  };

  render() {
    const { get, post, put, del } = this.state;
    return (
      <div className="badge bg-primary text-center fs-1 m-4">
        <h2>React for Spring Boot REST API </h2>
        <br />
        <Button
          className="btn btn-light btn-sm m-2 fs-5 col-8"
          onClick={this.openGet}
        >
          Get Students
        </Button>
        <br />
        <Modal show={get} onHide={this.closeGet}>
          <Modal.Body className="text-center">
            <GetStudents />
          </Modal.Body>
        </Modal>
        <Button
          className="btn btn-light btn-sm m-2 fs-5 col-8"
          onClick={this.openPost}
        >
          Add Students
        </Button>
        <br />
        <Modal show={post} onHide={this.closePost}>
          <Modal.Body className="text-center">
            <PostStudents />
          </Modal.Body>
        </Modal>

        <Button
          className="btn btn-light btn-sm m-2 fs-5 col-8"
          onClick={this.openPut}
        >
          Update Students
        </Button>
        <br />
        <Modal show={put} onHide={this.closePut}>
          <Modal.Body className="text-center">
            <PutStudents />
          </Modal.Body>
        </Modal>
        <Button
          className="btn btn-light btn-sm m-2 fs-5 col-8"
          onClick={this.openDel}
        >
          Delete Students
        </Button>
        <br />
        <Modal show={del} onHide={this.closeDel}>
          <Modal.Body className="text-center">
            <DeleteStudents />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default RestHome;
