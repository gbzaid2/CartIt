import React, { useState } from "react";
import Axios from "axios";
import Photo from "../ratings-and-reviews/Photo.jsx";
// In regards to taking props, does redux change this?

const AnswerUnit = (props) => {
  const [votes, setVotes] = useState(props.answer.helpfulness);
  const [didVote, setDidVote] = useState(false);
  const [didReport, setDidReport] = useState(false);
  const username = props.answer.answerer_name;
  const isSeller = username.toLowerCase().includes("seller");
  const answerDate = new Date(props.answer.date);
  const optionsDate = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const correctDate = new Intl.DateTimeFormat("en-US", optionsDate);
  const displayDate = correctDate.format(answerDate);
  let indexOfSeller;
  if (isSeller) {
    indexOfSeller = username.toLowerCase().indexOf("seller");
  }
  const handleUpvote = function(id) {
    if (didVote) return;
    Axios.put(`http://localhost:3000/qa/answer/${id}/helpful`);
    setDidVote(true);
    setVotes(votes + 1);
  };

  const handleReport = function(e, id) {
    if (didReport) return;
    Axios.put(`http://localhost:3000/qa/answer/${id}/report`).catch((err) =>
      console.log(err)
    );
    setDidReport(true);
    e.target.innerText = "Reported";
  };
  return (
    <div id={props.answer.id} className="answer-unit">
      <b>A:</b>&ensp;
      <span className="answer-body">
        {props.answer.body}
        {/* <div className = "level-left"><Photo key={props.answer.id} photo={{url:"https://images.unsplash.com/photo-1510551310160-589462daf284?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80"}} /></div> */}
        <br />
        &emsp;&ensp;&nbsp;by{" "}
        {isSeller ? (
          <span>
            {username.substring(0, indexOfSeller)}
            <b>{username.substring(indexOfSeller, indexOfSeller + 6)}</b>,
            {" " + displayDate}
          </span>
        ) : (
          `${username}, ${displayDate}`
        )}
        &ensp;|&ensp; Helpful?&nbsp;
        <u
          onClick={() => {
            handleUpvote(props.answer.id);
          }}
        >
          Yes
        </u>
        ({votes}) &ensp;|&ensp;{" "}
        <u
          onClick={(e) => {
            handleReport(e, props.answer.id);
          }}
        >
          Report
        </u>
      </span>
      {props.answer.photos.map((photo) => (
          <Photo key={photo.id} photo={{ url: photo }} />
      ))}
    </div>
  );
};

export default AnswerUnit;
