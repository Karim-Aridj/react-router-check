import React, {useState} from "react";
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
import Add from "./Add";
import ReactStars from "react-rating-stars-component";
import {BrowserRouter as Router, Link} from "react-router-dom";
import "./Navbar.css";
function NavBar({
  setSearch,
  handleMovie,
  setsearchRating,
  setMovielist,
  movielist,
}) {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Navbar.Brand href="#home" style={{color: "purple"}}>
        YoooPrime
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Add
            handleMovie={handleMovie}
            setMovielist={setMovielist}
            movielist={movielist}
          />
        </Nav>
        <ReactStars
          count={5}
          onChange={(v) => setsearchRating(v)}
          size={24}
          activeColor="#ffd700"
        />

        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
