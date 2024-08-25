import React from "react";
import { products } from "./products";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { add } from "./cartSlice";
import { setSearchQuery } from "./searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import goatImage from "./Ama9.jpg";
import goatImage2 from "./Ama7.jpg";
import goatImage3 from "./Ama3.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { setProducts } from "./productSlice";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
/>;

function Post() {
  console.log(products);
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.search);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    console.log("dispatch");
    dispatch(setProducts(products));
  }, []);

  const addToCart = (product) => {
    dispatch(add(product));
  };
  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div>
      <CarouselComponent />
      <div
        className="container-fluid my-5 bg-blue mt-auto"
        style={{ backgroundColor: "antiquewhite" }}
      >
        <h3
          className="text-center mb-4"
          style={{ backgroundColor: "antiquewhite" }}
        >
          Products List
        </h3>

        <div
          className="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-4"
          style={{ backgroundColor: "antiquewhite" }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="col" key={product.id}>
                <div className="card h-100">
                  <div className="text-center">
                    <Link
                      to={`ProductDetails/${product.id}`}
                      className="text-decoration-none"
                    >
                      <img
                        style={{
                          width: "80px",
                          height: "80px",
                          cursor: "pointer",
                        }}
                        src={product.image}
                        className="card-img-top mt-1"
                        alt={product.name}
                      />
                    </Link>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text text-center">
                      Rating: {product.rating.stars} stars
                      <div>
                        <img
                          style={{ width: "80px", height: "16px" }}
                          src={product.rating.img}
                          alt={`Rating: ${product.rating.stars} stars`}
                        />
                      </div>
                      ({product.rating.count} reviews)
                    </p>
                    <p className="card-text text-center">
                      Price: ${(product.priceCents / 100).toFixed(2)}
                    </p>
                    <p className="card-text text-center">
                      Keywords: {product.keywords.join(", ")}
                    </p>
                    <div style={{ backgroundColor: "white" }}>
                      {isInCart(product.id) ? (
                        <button
                          className="btn btn-warning text-center d-flex justify-content-center w-100"
                          disabled
                        >
                          Already in the cart
                        </button>
                      ) : (
                        <button
                          className="btn btn-warning text-center d-flex justify-content-center w-100 rounded-5"
                          onClick={() => addToCart(product)}
                        >
                          Add To Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">No products found</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Post;

const CarouselComponent = () => {
  return (
    <Carousel className="bg-dark">
      <Carousel.Item interval={4000}>
        <img
          src={goatImage3}
          className="d-block w-100"
          alt="First slide"
          style={{ height: "400px" }}
        />
        <Carousel.Caption>
          <h5>Great Indian Festival</h5>
          <p>Big Savings for Everyone</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          src={goatImage2}
          className="d-block w-100"
          alt="Second slide"
          style={{ height: "400px" }}
        />
        <Carousel.Caption>
          <h5>Amazon Upcoming Sales</h5>
          <p>Early Access For Prime Members</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={goatImage}
          className="d-block w-100"
          alt="Third slide"
          style={{ height: "400px" }}
        />
        <Carousel.Caption>
          <h5>Open Boxes Of Happiness</h5>
          <p>Great Deals, New Launches, Blockbuster Entertainment.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

const Footer = () => {
  return (
    <footer className="bg-secondary text-light py-4">
      <Container>
        <Row>
          <Col md={3}>
            <h5>Get to Know Us</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-white">
                About Us
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Careers
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Press Releases
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Amazon Science
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <h5>Connect with Us</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-white">
                Facebook
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Twitter
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Instagram
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <h5>Make Money with Us</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-white">
                Sell on Amazon
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Sell under Amazon Accelerator
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Protect and Build Your Brand
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Become an Affiliate
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Advertise Your Products
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Amazon Pay on Merchants
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <h5>Let Us Help You</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-white">
                COVID-19 and Amazon
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Your Account
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Returns Centre
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Recalls and Product Safety
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                100% Purchase Protection
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Amazon App Download
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Help
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col></Col>
        </Row>
        <Row className="mt-3 text-muted">
          <Col className="d-flex justify-content-center">
            <p className="text-white">
              Conditions of Use & Sale Privacy Notice Interest-Based Ads
            </p>
          </Col>
        </Row>
        <Row className=" text-muted">
          <Col className="d-flex justify-content-center">
            <p className="text-white">
              © 1996-2024, Amazon.com, Inc. or its affiliates
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
/*<div
      className="container-fluid my-5 bg-blue"
      style={{ backgroundColor: "antiquewhite" }}
    >
      <h3
        className="text-center mb-4"
        style={{ backgroundColor: "antiquewhite" }}
      >
        Products List
      </h3>
      <div
        className="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-4"
        style={{ backgroundColor: "antiquewhite" }}
      >
        {filteredProducts.map((product) => (
          <div className="col" key={product.id}>
            <div className="card h-100">
              <div className="text-center">
                <img
                  style={{ width: "80px", height: "80px" }}
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-center">
                  Rating: {product.rating.stars} stars
                  <div>
                    <img
                      style={{ width: "80px", height: "16px" }}
                      src={product.rating.img}
                      alt={`Rating: ${product.rating.stars} stars`}
                    />
                  </div>
                  ({product.rating.count} reviews)
                </p>
                <p className="card-text text-center">
                  Price: ${(product.priceCents / 100).toFixed(2)}
                </p>
                <p className="card-text text-center">
                  Keywords: {product.keywords.join(", ")}
                </p>
                <div style={{ backgroundColor: "white" }}>
                  {isInCart(product.id) ? (
                    <button
                      className="btn btn-warning text-center d-flex justify-content-center w-100"
                      disabled
                    >
                      Already in the cart
                    </button>
                  ) : (
                    <button
                      className="btn btn-warning text-center d-flex justify-content-center w-100 rounded-5"
                      onClick={() => addToCart(product)}
                    >
                      Add To Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>*/
