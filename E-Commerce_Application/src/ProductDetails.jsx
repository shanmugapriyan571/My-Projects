import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Post from "./Post";
import cartSlice from "./cartSlice";
import { addcart } from "./cartSlice";

function Nnm() {
  return (
    <div className="d-flex justify-content-around mt-4">
      <p className="ms-2 fw-bolder">Amazon Fashion</p>
      <p>Women</p>
      <p>Men</p>
      <p>Kids</p>
      <p>SportsWear</p>
    </div>
  );
}

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const prd = useSelector((state) => state.products);

  const prdres = prd.products[0].find((products) => products.id === id);
  const addToCart = (prr) => {
    dispatch(addcart(prr));
  };

  return (
    <>
      <Nnm />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <img
              className="img-fluid"
              style={{ maxHeight: "400px", objectFit: "cover" }}
              src={`/${prdres.image}`}
              alt={prdres.name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-center">{prdres.name}</h5>
              <p className="card-text text-center">
                Rating: {prdres.rating.stars} stars
                <div>
                  <img
                    style={{ width: "80px", height: "16px" }}
                    src={`/${prdres.rating.img}`}
                    alt={`Rating: ${prdres.rating.stars} stars`}
                  />
                </div>
                ({prdres.rating.count} reviews)
              </p>
              <p className="card-text text-center">
                Price: ${(prdres.priceCents / 100).toFixed(2)}
              </p>
              <p className="card-text text-center">
                Keywords: {prdres.keywords.join(", ")}
              </p>
              <div className="d-flex align-content-center justify-content-center flex-column">
                <button className="btn btn-danger text-white text-center w-25 m-lg-auto ">
                  Limited Time Deal
                </button>
                <br></br>
                <button
                  onClick={() => addToCart(prdres)}
                  className="btn btn-warning  text-dark w-25 mt-2 m-lg-auto rounded-3"
                >
                  Add To cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
