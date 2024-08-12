import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams} from 'react-router-dom'

import { postReview } from '../../actions/question.js'
import '../AskQuestion/AskQuestion.css';

const PostReview = () => {
  const { id } = useParams();
  const [message, setMessage] = useState('');
  const [questionPosterId, setQuestionPosterId] = useState('');
  const dispatch = useDispatch()
  const User = useSelector((state)=> state.currentUserReducer);
  const questionsList = useSelector((state) => state.questionsReducer);
  const navigate = useNavigate()

  useEffect(() => {
  questionsList.data === null ? console.log("No question in List"): questionsList.data
  .filter((question) => question._id === id)
  .map((question) => (setQuestionPosterId(question.userId)))
  })


  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(questionPosterId, id, User?.result?._id, message)
    if (message === "") {
      alert("Please Write Something to Review");
    } else {
      dispatch(postReview({ id,
        user_id: questionPosterId,
        question_id: id, 
        reviewer_id: User.result._id, 
        message})
      );
    }
    
    // console.log('dispatched');
    navigate(`/Questions/${id}`);
  }
  return (
    <div>
      <div className="ask-question">
        <div className="ask-ques-container">
          <h1>Post a Review</h1>
          <form onSubmit={(e) => {handleSubmit(e);}}>
            <div className="ask-form-container">
              <label htmlFor="ask-ques-title">
                <h4>Message</h4>
                <p>Be specific and imagine you are asking a question to another person</p>
                <input type="text" id="ask-ques-title" onChange={(e) =>{setMessage(e.target.value)}} placeholder="e.g. I need a usecase to support this statement"/>
              </label>
            </div>
            <input type="submit" value='Post Review' className="review-btn"/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostReview