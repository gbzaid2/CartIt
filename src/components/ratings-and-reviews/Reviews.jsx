import React, { useState, useEffect } from "react";
import Review from "./Review.jsx";
import MoreReviews from "./MoreReviews.jsx";
import AddReview from "./AddReview.jsx";
import axios from "axios";

const Reviews = (props) => {
  const [filters] = useState(["relevant", "newest", "helpful"]);
  const [reviews, setReviews] = useState([]);
  const [currentReviews, setCurrentReviews] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/reviews/${props.productId}/list?page=1&count=100`)
      .then((res) => {
        setReviews(res.data.results);
      })
      .catch((err) => {
        console.log("Error with gathering data from API");
      });
  }, [props.productId]);

  useEffect(() => {
    setCurrentReviews(reviews.slice(0, 2));
  }, [reviews]);

  const handleMoreReviews = () => {
    let currentIndex = currentReviews.length;
    let newArrAddOn = reviews.slice(currentIndex, currentIndex + 2);
    let newArrSet = currentReviews.slice();
    newArrSet.push(newArrAddOn);
    let finalArr = newArrSet.flat();
    setCurrentReviews(finalArr);
  };

  const sendFilter = (event) => {
    const reviewsAPI = `http://localhost:3000/reviews`;
    const sort = event.target.value;
    axios
      .get(`${reviewsAPI}/${props.productId}/list?page=1&count=100&sort=${sort}`)
      .then((res) => {
        setReviews(res.data.results);
      })
      .catch((err) => {
        console.log("Error with getting filtered reviews of:", event.target.value);
      });
  };

  return (
    <>
      <div className="container">
        <div className="level is-marginless">
          <div className="level is-left">
            <div className="level-item">
              <strong>{reviews.length} reviews, sort by:</strong>
              <div className="select is-dark" autoFocus={false}>
                <select
                  style={{ border: "none", height: "100%", fontStyle: "bold" }}
                  onChange={sendFilter}
                >
                  {filters.map((filter) => (
                    <option value={filter}>{filter}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: "696px", overflow: "auto" }}>
          {currentReviews.map((review) => {
            if (props.filters.length === 0 || props.filters.includes(review.rating)) {
              return <Review key={review.review_id} review={review} />;
            }
          })}
        </div>
      </div>

      <div className="container">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              {currentReviews.length !== reviews.length ? (
                <MoreReviews handleMoreReviews={handleMoreReviews} />
              ) : null}
            </div>
            <div className="level-item">
              <AddReview charList={props.charList} productId={props.productId} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
