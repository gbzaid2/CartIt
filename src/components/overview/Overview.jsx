import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import setCurrentItem from "../../js/actions/current-item.js";

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

const mapStateToProps = (store) => ({ PRODUCT_ID: store.product_id, averageRating:store.average_rating});

const OverviewContainer = (props) => {
  const [currentProduct, setCurrentProduct] = useState(productInfo);
  const [availableStyles, setAvailableStyles] = useState(productStyles.results);
  const [currentStyle, setCurrentStyle] = useState(productStyles.results[0]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/` + props.PRODUCT_ID)
      .then((productInfo) => {
        setCurrentProduct(productInfo.data);
        return axios.get(`http://localhost:3000/products/${props.PRODUCT_ID}/styles`);
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

  useEffect(()=>{
    props.setCurrentItem({
      currentProduct:currentProduct,
      currentStyle:currentStyle,
      averageRating:props.averageRating
    })
  },[currentStyle])
  return (
    <section className="section" id="overview">
      <div className="columns">
        <div className="column is-7">
          <ProductsGallery photos={currentStyle? currentStyle.photos: null} />
        </div>
        <div className="column is-5">
          <ProductRating rating={props.averageRating} />
          <ProductCategory category={currentProduct.category} />
          <ProductName name={currentProduct.name} />
          <ProductPrice
            originalPrice={currentStyle? currentStyle.original_price: "N/A"}
            salePrice={currentStyle? currentStyle.sale_price: 0}
          />
          <br />
          <ProductStyles
            defaultStyle={currentStyle}
            productStyles={availableStyles}
            setSelectedProduct={setCurrentStyle}
          />
          <AddToCart skus={currentStyle? currentStyle.skus:null} />
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

const Overview = connect(mapStateToProps, {setCurrentItem})(OverviewContainer);
export default Overview;
