import React, { useState } from "react";
import axios from "axios";
import StarRating from "./StarRating.jsx";
import Photo from "./Photo.jsx";
import RecommendedProduct from "./RecommendedProduct.jsx";
import Response from "./Response.jsx";
import "./Review.css";

const Review = (props) => {
  const [reviewId] = useState(props.review.review_id);
  const [helpfulReview, setHelpfulReview] = useState(props.review.helpfulness);
  const [reported, setReported] = useState(false);
  const [helpfulClicked, setHelfulClicked] = useState(false);

  const sendHelfulReview = () => {
    setHelpfulReview(helpfulReview + 1);
    setHelfulClicked(true);
    axios.put(`http://localhost:3000/reviews/helpful/${reviewId}`);
  };

  const sendReportedReview = () => {
    axios.put(`http://localhost:3000/reviews/report/${reviewId}`);
    setReported(true);
  };

  const fauxDate = new Date(props.review.date);
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  const formatDate = new Intl.DateTimeFormat("en-us", dateOptions);
  const date = formatDate.format(fauxDate);

  return (
    <>
      <div
        id="review"
        className="box is-shadowless"
        style={{
          borderRadius: "0px",
          borderBottom: "1px solid",
          fontSize: "75%",
          margin: "2%",
          padding: "2%"
        }}
      >
        <div className="media">
          <div className="media-content">
            <div className="content">
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    <StarRating rating={props.review.rating} />
                  </div>
                </div>
                {props.review.reviewer_name} &nbsp;&nbsp; {date}
              </div>

              <div style={{ paddingBottom: "1.5%", fontSize: "125%" }}>
                <strong>{props.review.summary}</strong>
              </div>
              <p>{props.review.body}</p>
            </div>
            <div className="level">
              <div className="level-left">
                {props.review.photos.map((photo) => (
                  <div className="level-item">
                    <Photo key={photo.id} photo={photo} />
                  </div>
                ))}
              </div>
            </div>
            <div className="level">
              <div className="level-left">
                <div className="level-item">
                  {props.review.recommend ? <RecommendedProduct /> : null}
                </div>
              </div>
            </div>
            <div className="level">
              <div className="level-left">
                <div className="level-item">
                  {props.review.response ? (
                    <Response response={props.review.response} />
                  ) : null}
                </div>
              </div>
            </div>

            <div className="level">
              <div className="level-left">
                <div className="level-item">
                  <p>Helpful?</p>
                </div>
                <div
                  className="tag is-small"
                  style={{ borderRadius: "0px" }}
                  onClick={helpfulClicked ? null : sendHelfulReview}
                >
                  Yes &nbsp; ({helpfulReview})
                </div>
                &nbsp;
                {reported ? (
                  <div className="tag is-small is-danger" style={{ borderRadius: "0px" }}>
                    <p>
                      <u>Reported</u>
                    </p>
                  </div>
                ) : (
                  <div
                    className="tag is-small"
                    style={{ borderRadius: "0px" }}
                    onClick={sendReportedReview}
                  >
                    <p>Report</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
