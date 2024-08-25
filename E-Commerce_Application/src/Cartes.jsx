import "bootstrap/dist/css/bootstrap.min.css";
import { remove, incrementQuantity, decrementQuantity } from "./cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { buyproduct } from "./Orderslice";
import React from "react";
function Cartes() {
  const [status, setstatus] = useState(false);
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const bcv = () => {
    setstatus(true);
    dispatch(buyproduct(products));
    console.log(products.length);
  };

  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  const increment = (id) => {
    dispatch(incrementQuantity(id));
  };

  const decrement = (id) => {
    dispatch(decrementQuantity(id));
  };
  const totalPrice = products
    .reduce((total, product) => {
      return total + (product.priceCents * product.quantity) / 100;
    }, 0)
    .toFixed(2);
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Shopping Cart</h1>
      <h2 className="text-center mb-4 text-success fs-bolder">
        Total Price: ${totalPrice}
      </h2>
      <div className="d-flex justify-content-center rounded-2">
        <button className="btn btn-warning  text-dark rounded-2" onClick={bcv}>
          Proceed To Buy {products.length} Items
        </button>
      </div>
      <div className="row text-lg-center m-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <Card className="h-100 border-2 border-blue rounded-1">
                <div className="text-center">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>Rating: {product.rating.stars} stars</Card.Text>
                  <div>({product.rating.count} reviews)</div>
                  <div>
                    <img
                      style={{ width: "80px", height: "16px" }}
                      src={product.rating.img}
                      alt={`Rating: ${product.rating.stars} stars`}
                    />
                  </div>
                  <Card.Text>
                    Price: ${(product.priceCents / 100).toFixed(2)}
                  </Card.Text>
                  <p className="card-text text-center">
                    Keywords: {product.keywords.join(", ")}
                  </p>
                  <div className="d-flex justify-content-center align-items-center">
                    <Button
                      variant="secondary"
                      onClick={() => decrement(product.id)}
                      className="mx-2"
                    >
                      -
                    </Button>
                    <span>{product.quantity}</span>
                    <Button
                      variant="secondary"
                      onClick={() => increment(product.id)}
                      className="mx-2"
                    >
                      +
                    </Button>
                    {increment}
                  </div>
                </Card.Body>
                <Card.Footer style={{ backgroundColor: "white" }}>
                  <Button
                    variant="danger"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          ))
        ) : (
          <p className="text-center">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

export default Cartes;
