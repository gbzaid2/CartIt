import React, { useState } from "react";
import Rating from "react-rating";
import RadioGroup from "./RadioGroup.jsx";
import ImageUploader from "react-images-upload";
import axios from "axios";

const ReviewModal = (props) => {
  const [overallRating, setOverallRating] = useState(0);
  const [recommendProduct, setRecommendProduct] = useState("true");
  const [sizeChar, setSizeChar] = useState();
  const [widthChar, setWidthChar] = useState();
  const [comfortChar, setComfortChar] = useState();
  const [qualityChar, setQualityChar] = useState();
  const [lengthChar, setLengthChar] = useState();
  const [fitChar, setFitChar] = useState();
  const [reviewSum, setReviewSum] = useState();
  const [reviewBody, setReviewBody] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [photos, setPhotos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const itemChar = Object.keys(props.charList);

  const characteristicNames = {
    Size: {
      setting: [
        "A size too small",
        "Half a size too small",
        "Perfect",
        "Half a size too big",
        "A size too big"
      ],
      func: setSizeChar,
      val: sizeChar
    },
    Width: {
      setting: ["Too narrow", "Slightly Narrow", "Perfect", "Slightly Wide", "Too wide"],
      func: setWidthChar,
      val: widthChar
    },
    Comfort: {
      setting: [
        "Uncomfortable",
        "Slightly uncomfortable",
        "Ok",
        "Comfortable",
        "Perfect"
      ],
      func: setComfortChar,
      val: comfortChar
    },
    Quality: {
      setting: ["Poor", "Below average", "What I expected", "Pretty great", "Perfect"],
      func: setQualityChar,
      val: qualityChar
    },
    Length: {
      setting: [
        "Runs short",
        "Runs slightly short",
        "Perfect",
        "Runs slightly long",
        "Runs long"
      ],
      func: setLengthChar,
      val: lengthChar
    },
    Fit: {
      setting: [
        "Runs tight",
        "Runs slightly tight",
        "Perfect",
        "Runs slightly long",
        "Runs long"
      ],
      func: setFitChar,
      val: fitChar
    }
  };

  const changeRecommended = (e) => {
    setRecommendProduct(e.target.value);
  };

  const reviewChange = (e) => {
    setReviewSum(e.target.value);
  };

  const reviewBodyChange = (e) => {
    setReviewBody(e.target.value);
  };

  const usernameChange = (e) => {
    setUsername(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const pictureChange = (e) => {
    let newPhotos = photos.slice();
    newPhotos.push(e[0].name);
    setPhotos(newPhotos);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const sendData = () => {
    const charArray = {
      Size: sizeChar,
      Width: widthChar,
      Comfort: comfortChar,
      Quality: qualityChar,
      Length: lengthChar,
      Fit: fitChar
    };
    const characterSendOver = {};
    for (let key in props.charList) {
      characterSendOver[props.charList[key].id] = parseInt(charArray[key]);
    }
    const data = {
      rating: overallRating,
      summary: reviewSum,
      body: reviewBody,
      recommend: Boolean(recommendProduct),
      name: username,
      email: email,
      photos: [],
      characteristics: characterSendOver
    };

    axios.post(`http://localhost:3000/reviews/` + props.PRODUCT_ID, data).catch((err) => {
      console.log("Error posting the review", err);
    });
    closeModal();
  };

  return (
    <>
      <button
        onClick={openModal}
        className="box is-button is-shadowless"
        style={{
          border: "solid",
          borderWidth: "thin",
          borderRadius: "0",
          fontSize: "75%",
          marginTop: "25px",
          height: "60px"
        }}
      >
        <strong>ADD A REVIEW +</strong>
      </button>
      <div className={`modal ${isOpen ? "is-active" : null}`}>
        <div className="modal-background" onClick={closeModal}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Write Your Review</p>
            <button className="delete" aria-label="close" onClick={closeModal}></button>
          </header>
          <section className="modal-card-body">
            <div className="level">
              <Rating
                initialRating={overallRating}
                emptySymbol={<i className="far fa-star" style={{}}></i>}
                fullSymbol={<i className="fa fa-star" style={{ color: "#d4af37" }}></i>}
                onChange={(value) => setOverallRating(value)}
              />
            </div>
            {overallRating !== 0 ? (
              <p
                className="is-size-7"
                onClick={() => {
                  setOverallRating(0);
                }}
              >
                <em>
                  <u>Clear Rating</u>
                </em>
              </p>
            ) : null}
            <br />

            <p>Do You Recommend This Product?</p>
            <div className="level">
              <div className="level-left">
                <label>
                  <input
                    type="radio"
                    value="true"
                    checked={recommendProduct === "true"}
                    onChange={changeRecommended}
                  />
                  &nbsp; Yes &nbsp;
                </label>
                <label>
                  <input
                    type="radio"
                    value="false"
                    checked={recommendProduct === "false"}
                    onChange={changeRecommended}
                  />
                  &nbsp; No
                </label>
              </div>
            </div>

            <p>Product Characteristics:</p>
            <br/>
            {itemChar.map((char, i) => (
              <RadioGroup
                key={i}
                name={char}
                settings={characteristicNames[char].setting}
                func={characteristicNames[char].func}
                val={characteristicNames[char].val}
              />
            ))}
            <br />
            <p>Review Summary:</p>
            <input
              value={reviewSum}
              placeholder="Example: Best purchase ever!"
              type="text"
              onChange={reviewChange}
              style={{ width: "50%" }}
              maxLength="60"
            />

            <p>Review Description:</p>
            <textarea
              value={reviewBody}
              placeholder="Why did you like the product or not?"
              type="text"
              onChange={reviewBodyChange}
              style={{ width: "50%", height: "100px" }}
              minLength="50"
              required="required"
            />
            <br />
            <ImageUploader
              withIcon={true}
              withPreview={true}
              singleImage={false}
              buttonText="Upload Images"
              onChange={pictureChange}
              imgExtension={[".jpg", ".gif", ".png", ".gif", "jpeg"]}
              maxFileSize={5242880}
            />
            <p>Nickname:</p>
            <input
              value={username}
              placeholder="Example: jackson11!"
              type="text"
              onChange={usernameChange}
              style={{ width: "50%" }}
              maxLength="60"
            />
            <p>Email:</p>
            <input
              value={email}
              placeholder="Example: jackson11@email.com"
              type="text"
              onChange={emailChange}
              style={{ width: "50%" }}
              maxLength="60"
            />
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={sendData}>
              Send Review
            </button>
            <button className="button" onClick={closeModal}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ReviewModal;
