import React, { useState, useEffect } from "react";

import axios from "axios";
import Table from "react-bootstrap/Table";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Albums = () => {
  const [data, setData] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://itunes.apple.com/us/rss/topalbums/limit=50/json")
      .then((res) => {
        console.log(res.data.feed.entry);
        setData(res.data.feed.entry);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1 style={{ margin: "1em" }}> Top 50 Albums </h1>
      <Table responsive bordered>
        <thead>
          <tr>
            <th>Album Name</th>
          </tr>
        </thead>
        {data &&
          data !== undefined &&
          data.map((d, i) => {
            return (
              <>
                <tbody>
                  <tr>
                    <td>
                      {d.title.label}{" "}
                      <Button variant="primary" onClick={handleShow}>
                        Details
                      </Button>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Album Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          Copyright : {d.rights.label}
                          {/* {d.im[":artist"] &&
                            d.im[":artist"] !== undefined &&
                            d.im[":artist"].label} */}
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                      {/* <button onClick={navigateToDetails(i)}>Details</button> */}
                    </td>
                  </tr>
                </tbody>

                {/* <h2>{d.title.label}</h2> */}
              </>
            );
          })}
      </Table>
    </>
  );
};

export default Albums;
