import React, { useState } from "react";
import Axios from "axios";
import AnswerUnit from "./AnswerUnit.jsx";
import $ from "jquery";
const QuestionUnit = (props) => {
  const [votes, setVotes] = useState(props.question.question_helpfulness);
  const [didVote, setDidVote] = useState(false);
  const [answersToDisplay, setAnswersToDisplay] = useState(2);
  const answers = props.question.answers;
  const handleClick = function(id) {
    if (didVote) return;
    Axios.put(`http://localhost:3000/qa/question/${id}/helpful`).catch((err) => {
      console.log(err);
    });
    setDidVote(true);
    setVotes(votes + 1);
  };

  const handleAddAnswer = function() {
    props.setCurrentlyAnswering(props.question.question_id);
    $("#answer-form").addClass("is-active");
  };

  return (
    <div>
      <div className="my-flex">
        <span className="question-body">Q:&ensp;{props.question.question_body}</span>
        <span className="question-right">
          Helpful?&nbsp;&nbsp;
          <u
            onClick={() => {
              handleClick(props.question.question_id);
            }}
          >
            Yes
          </u>
          ({votes})&ensp; |&ensp;<u onClick={handleAddAnswer}>Add Answer</u>
        </span>
      </div>
      {answers.slice(0, answersToDisplay).map((answer, index) => (
        <AnswerUnit answer={answer} key={index} />
      ))}
      {answersToDisplay < answers.length ? (
        <b className="more-answers" onClick={() => setAnswersToDisplay(Infinity)}>
          &emsp;&emsp;SEE MORE ANSWERS
        </b>
      ) : (
        ""
      )}
      {answersToDisplay === Infinity ? (
        <b className="more-answers" onClick={() => setAnswersToDisplay(2)}>
          &emsp;&emsp;COLLAPSE ANSWERS
        </b>
      ) : (
        ""
      )}
    </div>
  );
};

export default QuestionUnit;
