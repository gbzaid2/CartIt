import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import IndividualCard from "./IndividualCard.jsx";
import { data } from "./data.js";
import changeProductId from "../../js/actions/product-id.js";

const mapStateToProps = (store) => ({
  PRODUCT_ID: store.product_id,
  currentItem: store.current_item
});

const RIC_ = (props) => {
  const [relatedItemsArr, setRelatedItemsArr] = useState([]);
  const [relatedProductsContent, setRelatedProductsContent] = useState([]);
  const [ratings, setRatings] = useState([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
  const [styles, setStyles] = useState(data);
  const [features, setFeatures] = useState([]);
  const [outfit, setOutfit] = useState(
    localStorage.getItem("myOutfit") ? JSON.parse(localStorage.getItem("myOutfit")) : []
  );

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${props.PRODUCT_ID}/related`)
      .then((data) => {
        setRelatedItemsArr(data.data);
      })
      .catch((err) => {
        console.log("Error with getting related items array", err);
      });
  }, [props.PRODUCT_ID]);

  useEffect(() => {
    let maxIndex = Math.max(...relatedItemsArr);
    let axiosReqArr = [];
    axiosReqArr.push(
      axios.get(`http://localhost:3000/products/list?page=1&count=` + maxIndex)
    );
    for (let num of relatedItemsArr) {
      axiosReqArr.push(axios.get(`http://localhost:3000/products/${num}/styles`));
    }
    for (let num of relatedItemsArr) {
      axiosReqArr.push(axios.get(`http://localhost:3000/reviews/${num}/meta`));
    }
    for (let num of relatedItemsArr) {
      axiosReqArr.push(axios.get(`http://localhost:3000/products/` + num));
    }
    axios
      .all(axiosReqArr)
      .then((data) => {
        let insertArray = [];
        for (let index of relatedItemsArr) {
          insertArray.push(data[0].data[index - 1]);
        }
        setRelatedProductsContent(insertArray);
        return data.slice(1);
      })
      .then((data) => {
        let productArr = [];
        let productIndex = relatedItemsArr.length;
        let productFinishArray = data.slice(0, productIndex);
        for (let product of productFinishArray) {
          productArr.push(product.data.results);
        }
        setStyles(productArr);
        return data.slice(productIndex);
      })
      .then((ratings) => {
        let ratingsIndex = relatedItemsArr.length;
        let averageRatingsArr = ratings.slice(0, ratingsIndex).map((data) => {
          let rates = data.data.ratings;

          let total = Object.values(rates).reduce((a, b) => a + b);
          let ratesSum = Object.entries(rates).reduce(
            (a, b) => a + Number(b[0]) * b[1],
            0
          );
          let averageRating = Math.round((ratesSum / total) * 10) / 10;
          return averageRating;
        });
        setRatings(averageRatingsArr);
        return ratings.slice(ratingsIndex);
      })
      .then((features) => {
        let thisFeatures = [];
        for (let item of features) {
          thisFeatures.push(item.data.features);
        }
        setFeatures(thisFeatures);
      })
      .catch((err) => {
        console.log("Error with getting the list of items:", err);
      });
  }, [relatedItemsArr]);

  const changeTheId = (id) => {
    props.changeProductId(id);
  };

  const addCurrentItem = () => {
    let currentOutfit = JSON.parse(localStorage.getItem("myOutfit")) || [];
    let currentItem = {
      currentItem: props.currentItem
    };
    if(currentOutfit.some((item) => (item.currentItem.currentProduct.id === currentItem.currentItem.currentProduct.id))){
    }else{
      currentOutfit.push(currentItem);
      localStorage.setItem("myOutfit", JSON.stringify(currentOutfit));
      setOutfit(currentOutfit);
    }
  };

  const deleteTheId = (product) => {
    let current = JSON.parse(localStorage.getItem("myOutfit"));
    let newOutfit = current.filter((item) => item.currentItem.currentProduct.id !== product)
    localStorage.setItem("myOutfit", JSON.stringify(newOutfit));
    setOutfit(newOutfit);
  };

  return (
    <div className="container is-fluid" id="related-items">
      <p>RELATED PRODUCTS</p>
      <div
        name="related-items"
        className="level"
        style={{ overflow: "auto", width: "90vw", height: "60vh" }}
      >
        <div className="level-left">
          {relatedProductsContent.map((product, i) => {
            return (
              <IndividualCard
                key={i}
                product={product}
                func={changeTheId}
                photo={styles[i] ? styles[i][0].photos[0] : null}
                cardType={"related"}
                rating={ratings[i]}
                features={features[i]}
              />
            );
          })}
        </div>
      </div>

      <div name="outfit"></div>
      <p>YOUR OUTFIT</p>
      <div
        name="related-items"
        className="level"
        style={{ overflow: "auto", width: "90vw", height: "60vh" }}
      >
        <div className="level-left">
          <div className="button is-medium" onClick={addCurrentItem} style={{marginRight:"10px"}}>
            ADD TO CART +
          </div>
          {outfit.map((product, i) => {
            return (
              <IndividualCard
                key={i}
                product={product.currentItem.currentProduct}
                func={deleteTheId}
                photo={product.currentItem.currentStyle.photos[0]}
                rating={product.currentItem.averageRating}
                cardType={"outfit"}
                features={product.currentItem.currentProduct.features}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const RIC = connect(mapStateToProps, { changeProductId })(RIC_);

export default RIC;
