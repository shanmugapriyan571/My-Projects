import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./amazon.css";
import { FormControl } from "react-bootstrap";
import { useState } from "react";
import { setSearchQuery } from "./searchSlice";

/*import amazonLogo from "./images/amazon-logo-white.png";
import amazonMobileLogo from "./images/amazon-mobile-logo-white.png";
import searchIcon from "./images/icons/search-icon.png";
import cartIcon from "./images/icons/cart-icon.png";*/

function Navbarpanel() {
  const [searchTerm, setSearchTerm] = useState("");
  const cartproducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);
    dispatch(setSearchQuery(query));
  };

  return (
    <Navbar expand="lg" className="bg-dark" style={{ height: "85px" }}>
      <Container>
        <Navbar.Brand href="#home" className="text-white">
          <img
            style={{ width: "100px", height: "30px" }}
            src={"./images/amazon-logo-white.png"}
            alt="Amazon India"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          className="bg-warning"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex justify-content-center my-2 my-lg-0 w-100">
            {" "}
            <Form className="d-flex w-75">
              <FormControl
                type="search"
                placeholder="Search Amazon.in"
                className="me-2"
                aria-label="Search"
                onChange={handleSearchChange}
              />
              <Button className="btn btn-primary bg-warning" type="submit">
                Search
              </Button>
            </Form>
          </div>

          <Nav className="ms-auto">
            <Nav.Link className="text-white m-1 fw-bolder" to="/" as={Link}>
              Home
            </Nav.Link>
            <Nav.Link
              className="text-white m-1 fw-bolder"
              to="Orders"
              as={Link}
            >
              <span> Orders</span>
            </Nav.Link>

            <Nav.Link
              className="text-white m-1 fw-bolder d-flex align-items-center"
              to="Cartes"
              as={Link}
            >
              <div className="position-relative">
                <img
                  style={{ width: "50px", height: "30px" }}
                  src={"./images/icons/cart-icon.png"}
                />
                <span
                  className="position-absolute "
                  style={{
                    top: "-12px",
                    right: "20px",
                    color: "orange",
                    transform: "translate(50%, 0)",
                  }}
                >
                  {cartproducts.length}
                </span>
              </div>
              <span className="ms-2">Cart</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarpanel;
