import React from "react";
import "./HomeMainbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import QuestionList from "./QuestionList";

const HomeMainbar = () => {
  var questionsList = [
    {
      _id: 1,
      upVotes: 3,
      downVotes:2,
      noOfAnswers: 2,
      questionTitle: "What is a Function?",
      questionBody: "What is a Function?",
      questionTags: ["javascript", "node js"],
      userPosted: "John Doe",
      userId:1,
      askedOn: "jan 1",
      answer: [{
        answerBody: "Answer",
        userAnswerd: 'Kumar',
        answeredOn:'jan 2',
        userId: 2,
      }]
    },
    {
      _id: 3,
      upVotes: 3,
      downVotes:2,
      noOfAnswers: 4,
      questionTitle: "What is a Function?",
      questionBody: "What is a Function?",
      questionTags: ["javascript", "node js"],
      userPosted: "John Doe",
      userId:1,
      askedOn: "jan 1",
      answer: [{
        answerBody: "Answer",
        userAnswerd: 'Kumar',
        answeredOn:'jan 2',
        userId: 2,
      }]
    },{
      _id: 2,
      upVotes: 3,
      downVotes:2,
      noOfAnswers: 10,
      questionTitle: "What is a Function?",
      questionBody: "What is a Function?",
      questionTags: ["javascript", "node js"],
      userPosted: "John Doe",
      userId:1,
      askedOn: "jan 1",
      answer: [{
        answerBody: "Answer",
        userAnswerd: 'Kumar',
        answeredOn:'jan 2',
        userId: 2,
      }]
    }
  ];
  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();
  
  const checkAuth = () => {
    if (user === null){
      alert(" login or signup to ask a question");
      navigate("/Auth");
    }
    else {
      navigate('/AskQuestion')
    }
  }

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        {questionsList === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.length} questions</p>
            <QuestionList questionList={questionsList} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
