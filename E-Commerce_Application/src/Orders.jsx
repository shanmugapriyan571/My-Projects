import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Container, Row, Col } from "react-bootstrap";
//import { buyproduct } from "./Orderslice";

function Orders() {
  const { products } = useSelector((state) => state.buypro);
  console.log(products.length);

  return (
    <Container>
      <div className="text-center text-success">
        <h2>Orders Details</h2>
      </div>
      {products.length > 0 ? (
        <Row>
          {products.map((product, i) => (
            <Col md={4} key={product.id} className="mb-3">
              <Card>
                <Card.Img
                  style={{ width: "80px", height: "80px" }}
                  variant="top"
                  src={product.image}
                  className="d-flex justify-content-center mx-auto"
                />
                <Card.Body>
                  <Card.Title>Product ID: {product.name}</Card.Title>
                  <Card.Text className="text-success">
                    Delivered On Sunday
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>No Orders.</p>
      )}
    </Container>
  );
}

export default Orders;
