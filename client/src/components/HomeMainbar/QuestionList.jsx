import React from "react";
import Questions from "./Questions";
import AdComponent from "./Ads";


const QuestionList = ({questionList}) => {
  return (
    <>
      {questionList.map((question, index) => (
        <React.Fragment key={question.id}>
          <Questions question={question} />
          {index % 1 === 0 && <AdComponent />} {/* Insert ad after every 5 questions */}
        </React.Fragment>
      ))}
    </>
  );
};

export default QuestionList;
