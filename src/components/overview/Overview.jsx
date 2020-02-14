import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";

import ProductsGallery from "./ProductsGallery.jsx";
import ProductRating from "./ProductRating.jsx";
import ProductCategory from "./ProductCategory.jsx";
import ProductName from "./ProductName.jsx";
import ProductPrice from "./ProductPrice.jsx";
import ProductStyles from "./ProductStyles.jsx";
import AddToCart from "./AddToCart.jsx";
import ProductDetails from "./ProductDetails.jsx";
import ProductFeatures from "./ProductFeatures.jsx";

import { productStyles } from "./data/product-styles";
import { productInfo } from "./data/products-info";
import { reviews } from "./data/reviews";
import QA from "../questions-and-answers/QA.jsx";

const mapStateToProps = (store) => ({ PRODUCT_ID: store.product_id, averageRating: 3.7 });

const OverviewContainer = (props) => {
  const [currentProduct, setCurrentProduct] = useState(productInfo);
  const [availableStyles, setAvailableStyles] = useState(productStyles.results);
  const [currentStyle, setCurrentStyle] = useState(productStyles.results[0]);

  useEffect(() => {
    axios
      .get(`http://3.134.102.30/products/` + props.PRODUCT_ID)
      .then((productInfo) => {
        setCurrentProduct(productInfo.data);
        return axios.get(`http://3.134.102.30/products/${props.PRODUCT_ID}/styles`);
      })
      .then((productStyles) => {
        setAvailableStyles(productStyles.data.results);
      })
      .catch((err) => {
        console.log("Error in loading up the data", err);
      });
  }, [props.PRODUCT_ID]);

  useEffect(() => {
    setCurrentStyle(availableStyles[0]);
  }, [availableStyles]);

  return (
    <section className="section">
      <div className="columns">
        <div className="column is-7">
          <ProductsGallery photos={currentStyle ? currentStyle.photos : null} />
        </div>
        <div className="column is-5">
          <ProductRating rating={props.averageRating} />
          <ProductCategory category={currentProduct.category} />
          <ProductName name={currentProduct.name} />
          <ProductPrice
            originalPrice={currentStyle ? currentStyle.original_price : "N/A"}
            salePrice={currentStyle ? currentStyle.original_price : "N/A"}
          />
          <br />
          <ProductStyles
            defaultStyle={currentStyle}
            productStyles={availableStyles}
            setSelectedProduct={setCurrentStyle}
          />
          <AddToCart skus={currentStyle ? currentStyle.skus : null} />
        </div>
      </div>
      <div className="container">
        <div className="columns" style={{ marginLeft: "5%", marginTop: "2%" }}>
          <div
            className="column is-two-thirds"
            style={{ borderRight: "solid", borderWidth: "1.5px" }}
          >
            <ProductDetails
              slogan={currentProduct.slogan}
              description={currentProduct.description}
            />
          </div>
          <div className="column is-one-third">
            <ProductFeatures features={currentProduct.features} />
          </div>
        </div>
      </div>
    </section>
  );
};

const Overview = connect(mapStateToProps)(OverviewContainer);
export default Overview;
