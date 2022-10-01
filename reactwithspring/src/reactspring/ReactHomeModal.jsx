import React, { Component } from "react";
import GetStudentInfo from "./GetStudentInfo";
import InsertStudent from "./InsertStudent";
import UpdateStudent from "./UpdateStudent";
import DeleteStudent from "./DeleteStudent";
import { Modal } from "react-bootstrap";
class ReactHomeModal extends Component {
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
  openInsert = () => {
    this.setState({
      post: true,
    });
  };
  closeInsert = () => {
    this.setState({
      post: false,
    });
  };
  openUpdate = () => {
    this.setState({
      put: true,
    });
  };
  closeUpdate = () => {
    this.setState({
      put: false,
    });
  };
  openDelete = () => {
    this.setState({
      del: true,
    });
  };
  closeDelete = () => {
    this.setState({
      del: false,
    });
  };

  render() {
    const { get, post, put, del } = this.state;
    return (
      <div className="badge bg-primary m-4 text-center fs-1">
        <h3>React as Frontend for Spring Boot REST API</h3>
        <br />
        <button
          onClick={this.openGet}
          className="btn btn-light m-2 fs-4 col-10"
        >
          Get Student Info
        </button>
        <br />
        <Modal show={get} onHide={this.closeGet} scrollable={true}>
          <Modal.Body>
            <GetStudentInfo closeGet={this.closeGet} />
          </Modal.Body>
        </Modal>

        <button
          onClick={this.openInsert}
          className="btn btn-light m-2 fs-4 col-10"
        >
          Insert Student Info
        </button>
        <br />
        <Modal show={post} onHide={this.closePost} scrollable={true}>
          <Modal.Body>
            <InsertStudent closeInsert={this.closeInsert} />
          </Modal.Body>
        </Modal>

        <button
          onClick={this.openUpdate}
          className="btn btn-light m-2 fs-4 col-10"
        >
          Update Student Info
        </button>
        <br />
        <Modal show={put} onHide={this.closeUpdate} scrollable={true}>
          <Modal.Body>
            <UpdateStudent closeUpdate={this.closeUpdate} />
          </Modal.Body>
        </Modal>

        <button
          onClick={this.openDelete}
          className="btn btn-light m-2 fs-4 col-10"
        >
          Delete Student Info
        </button>
        <br />
        <Modal show={del} onHide={this.closeDelete} scrollable={true}>
          <Modal.Body>
            <DeleteStudent closeDelete={this.closeDelete} />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default ReactHomeModal;
