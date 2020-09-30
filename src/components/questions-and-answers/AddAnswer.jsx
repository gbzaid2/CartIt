import React from "react";
import $ from "jquery";
import Axios from "axios";

class AddAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      name: "",
      email: "",
      question_id: this.props.question_id
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this);
    this.handleCloseAnswer = this.handleCloseAnswer.bind(this);
    this.emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  }

  handleCloseAnswer() {
    $("#answer-form").removeClass("is-active");
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmitAnswer() {
    if (
      this.state.body.length === 0 ||
      this.state.email.length === 0 ||
      this.state.name.length === 0
    ) {
      alert("Please fill out the empty fields");
      return;
    }
    if (!this.emailRegex.test(this.state.email)) {
      alert("Invalid email");
      return;
    }

    let myAnswer = {
      body: this.state.body,
      name: this.state.name,
      email: this.state.email
    };

    Axios.post(`http://localhost:3000/qa/${this.props.question_id}/answers`, myAnswer)
      .then(() => { this.props.loadQuestions()})
      .catch((err) => {
        console.log(err);
      });

    this.handleCloseAnswer();
  }

  render() {
    return (
      <div className="add-Answer">
        <div className="modal" id="answer-form">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Your Answer</p>
              <button
                className="delete"
                aria-label="close"
                onClick={this.handleCloseAnswer}
              ></button>
            </header>
            <section className="modal-card-body">
              <form>
                <textarea
                  className="textarea"
                  name="body"
                  placeholder=""
                  value={this.state.body}
                  onChange={this.handleChange}
                  autoComplete="off"
                />
                <label>
                  <p>What is your nickname</p>
                </label>
                <input
                  type="text"
                  className="input"
                  name="name"
                  placeholder="Example: jackson11!"
                  value={this.state.name}
                  onChange={this.handleChange}
                  autoComplete="off"
                />
                <p>For privacy reasons, do not use your full name or email address</p>
                <label>
                  <p>Your email</p>
                </label>
                <input
                  type="text"
                  className="input"
                  name="email"
                  placeholder="email@example.com"
                  value={this.state.email}
                  onChange={this.handleChange}
                  autoComplete="off"
                />
                <br />
                <input
                  type="button"
                  value="Submit"
                  onClick={this.handleSubmitAnswer}
                ></input>
              </form>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default AddAnswer;
