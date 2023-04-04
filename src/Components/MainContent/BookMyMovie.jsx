import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const BookMyMovie = () => {
  const { state } = useLocation();
  const { name } = state;

  const navigate = useNavigate();

  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
  });

  function handleChange(e) {
    setUserDetail({
      ...userDetail,
      [e.target.name]: e.target.value,
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    let movieBookingDetail = {
      MovieName: name,
      userDetail,
    };

    let sessionStorageMoviesData = sessionStorage.movieBookingDetail;
    console.log("movieBookingDetail:-", movieBookingDetail);
    if (!sessionStorageMoviesData) {
      sessionStorage.setItem(
        "movieBookingDetail",
        JSON.stringify([movieBookingDetail])
      );
    } else {
      let parseArray = JSON.parse(sessionStorageMoviesData);
      let newArrayStorage = [...parseArray, movieBookingDetail];
      sessionStorage.setItem(
        "movieBookingDetail",
        JSON.stringify(newArrayStorage)
      );
    }
    setUserDetail({
      name: "",
      email: "",
    });
    alert("You Booked your ticket succefully!");
    navigate(`/`);
  }

  return (
    <>
      {
        <div style={{ minHeight: "80vh", paddingTop: "2rem" }}>
          <Form
            onSubmit={handleFormSubmit}
            style={{ margin: "2rem", textAlign: "left" }}
          >
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Movie Name</Form.Label>
              <Form.Control
                defaultValue={name}
                disabled
                type="test"
                placeholder="Movie Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUserName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                required
                name="name"
                value={userDetail.name}
                onChange={handleChange}
                type="text"
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                name="email"
                value={userDetail.email}
                onChange={handleChange}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>

            <Button
              style={{ marginLeft: "1rem" }}
              variant="primary"
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
          </Form>
        </div>
      }
    </>
  );
};

export default BookMyMovie;
