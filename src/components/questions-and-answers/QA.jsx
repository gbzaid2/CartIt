import React from "react";
import QuestionUnit from "./QuestionUnit.jsx";
import AddQuestion from "./AddQuestion.jsx";
import AddAnswer from "./AddAnswer.jsx";
import $ from "jquery";
import Axios from "axios";

import { connect } from "react-redux";
let mapStateToProps = (store) => ({ PRODUCT_ID: store.product_id });
class QA_ extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.state = {
      questions: {},
      questionsToDisplay: 2,
      productID: this.props.PRODUCT_ID,
      currentlyAnswering: null, // This is changed when a user clicks "Add Answer" on a particular question
      searchedQuestions: {}, // key value pairs of idx : true or false depeneding on if it matches the search term
      searchMode: false
    };
    this.handleMoreQuestions = this.handleMoreQuestions.bind(this);
    this.setCurrentlyAnswering = this.setCurrentlyAnswering.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loadQuestions = this.loadQuestions.bind(this);
  }

  loadQuestions() {
    Axios.get("http://localhost:3000/qa/" + this.state.productID + "/?page=1&count=200")
      .then((data) => {
        console.log("Got new questions:", this.state.productID);
        data.data.results.sort((a, b) => {
          return b.question_helpfulness - a.question_helpfulness;
        });
        let arrayOfAnswers;
        data.data.results.map((question) => {
          arrayOfAnswers = [];
          Object.keys(question.answers).map((answerID) =>
            arrayOfAnswers.push(question.answers[answerID])
          );
          arrayOfAnswers.sort((a, b) => {
            if (a.answerer_name.toLowerCase().includes("seller")) {
              return -1;
            } else {
              return b.helpfulness - a.helpfulness;
            }
          });
          question.answers = arrayOfAnswers;
        });

        this.setState({
          questions: data.data
        });
      })
      .catch((err) => {
        // Do nothing
        console.log(err);
      });
  }
  componentDidMount() {
    this.loadQuestions();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.PRODUCT_ID !== this.props.PRODUCT_ID) {
      console.log(prevProps.PRODUCT_ID);
      console.log(this.props.PRODUCT_ID);
      this.setState(
        {
          productID: this.props.PRODUCT_ID,
          questionsToDisplay: 2
        },
        () => {
          this.loadQuestions();
        }
      );
    }
  }

  setCurrentlyAnswering(id) {
    this.setState({
      currentlyAnswering: id
    });
  }
  handleAddQuestion(e) {
    $("#add-question-modal").addClass("is-active");
  }
  handleOpenQuestion() {
    $("#add-question-modal").addClass("is-active");
  }
  handleCloseQuestion(e) {
    $("#add-question-modal").removeClass("is-active");
  }

  handleMoreQuestions() {
    let number = this.state.questionsToDisplay;
    this.setState({
      questionsToDisplay: (number += 2)
    });
  }
  handleChange(e) {
    let searchTerms = e.target.value;
    if (e.target.value.length < 3) {
      // Clear results
      this.setState({
        searchMode: false,
        searchedQuestions: {},
        numOfSearch: null
      });
    } else {
      // start matching
      let markedQuestions = {};

      this.state.questions.results.map((question, index) => {
        if (
          question.question_body
            .split(" ")
            .join("")
            .toLowerCase()
            .includes(
              searchTerms
                .split(" ")
                .join("")
                .toLowerCase()
            )
        ) {
          markedQuestions[question.question_id] = true;
        }
        question.answers.map((answer) => {
          if (
            answer.body
              .split(" ")
              .join("")
              .toLowerCase()
              .includes(
                searchTerms
                  .split(" ")
                  .join("")
                  .toLowerCase()
              )
          ) {
            markedQuestions[question.question_id] = true;
          }
        });
      });
      this.setState({
        searchMode: true,
        searchedQuestions: markedQuestions,
        prevQuestionsToDisplay: this.state.questionsToDisplay,
        numOfSearch: 100
      });
    }
  }
  render() {
    return this.state.questions.product_id !== undefined ? (
      <div id="questions">
        <div className="content is-medium">
          <p>QUESTIONS AND ANSWERS</p>
          <input
            className="search-box"
            type="text"
            placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
            onChange={this.handleChange}
          />
          <div className="all-questions">
            {this.state.questions.results
              .slice(0, this.state.numOfSearch || this.state.questionsToDisplay)
              .map((question, index) => {
                if (
                  this.state.searchMode &&
                  this.state.searchedQuestions[question.question_id]
                ) {
                  return (
                    <QuestionUnit
                      question={question}
                      key={question.question_id}
                      setCurrentlyAnswering={this.setCurrentlyAnswering}
                    />
                  );
                } else if (this.state.searchMode === false) {
                  return (
                    <QuestionUnit
                      question={question}
                      key={question.question_id}
                      setCurrentlyAnswering={this.setCurrentlyAnswering}
                    />
                  );
                }
              })}{" "}
            <br />
            <AddAnswer
              question_id={this.state.currentlyAnswering}
              loadQuestions={this.loadQuestions}
            />
            <AddQuestion
              productID={this.state.productID}
              loadQuestions={this.loadQuestions}
            />
          </div>
          {this.state.questions.results.length > 0 &&
          this.state.questionsToDisplay < this.state.questions.results.length ? (
            <button
              type="button"
              className="my-button"
              onClick={this.handleMoreQuestions}
            >
              MORE ANSWERED QUESTIONS
            </button>
          ) : (
            ""
          )}
          <button type="button" className="my-button" onClick={this.handleOpenQuestion}>
            ADD A QUESTION +
          </button>
        </div>
      </div>
    ) : (
      <div></div>
    );
  }
}

let QA = connect(mapStateToProps, null)(QA_);

export default QA;
