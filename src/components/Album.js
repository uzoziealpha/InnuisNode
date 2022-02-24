import React, { useState } from "react";
import { Modal } from "react-bootstrap";

export default function Album({ album }) {
  const [quantity, setquantity] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="shadow-lg p-1 mb-5 bg-black rounded border border-warning">
      <div onClick={handleShow}>
        <img
          src={album.cover}
          alt="img-fluid"
          style={{ height: "200px", width: "200px" }}
        />
      </div>

      <div className="flex-container">
        <div className="info">
          <p>
            <b>{album.artist}</b>
          </p>
          <p>{album.album}</p>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-1 w-100 m-1">
          <button className="btn">Get Album</button>
        </div>
        <div></div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{album.artist}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={album.cover} className="img-fluid" style={{height: '300px', width: '300px'}}></img>
          <p>{album.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
