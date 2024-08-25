import React from "react";
import Post from "./Post";
function Dashboard() {
  return (
    <div>
      <Post />
    </div>
  );
}

export default Dashboard;
 /*<div>
      <CarouselComponent />
      <div
        className="container-fluid my-5 bg-blue mt-auto"
        style={{ backgroundColor: " antiquewhite" }}
      >
        <h3
          className="text-center mb-4"
          style={{ backgroundColor: " antiquewhite" }}
        >
          Products List
        </h3>

        <div
          className="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-4  "
          style={{ backgroundColor: " antiquewhite" }}
        >
          {products.map((product) => (
            <div className="col" key={product.id}>
              <div className="card h-100">
                <div className="text-center">
                  <img
                    style={{ width: "80px", height: "80px" }}
                    src={product.image}
                    className="card-img-top mt-1"
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
      </div>
    </div>*/