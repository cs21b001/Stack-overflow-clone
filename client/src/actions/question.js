import * as api from '../api'

export const askQuestion = (questionData, navigate) => async (dispatch) => {
  try {
    const {data} = await api.postQuestion(questionData)
    dispatch({ type: 'POST_QUESTION', payload: data})
    dispatch(fetchAllQuestions())
    navigate('/')
  } catch (error) {
    console.log(error)
  }
}

export const fetchAllQuestions = () => async (dispatch) => {
  try {
    const {data} = await api.getAllQuestions()
    dispatch({type: 'FETCH_ALL_QUESTIONS', payload: data})
  } catch (error) {
    console.log(error)
  }
}

export const postAnswer = (answerData) =>async (dispatch)=>{
  try{
  const { id, noOfAnswers, answerBody, userAnswered, userId } = answerData;
  const { data } = await api.postAnswer( id, noOfAnswers, answerBody, userAnswered, userId)
  dispatch({ type: 'POST_ANSWER', payload: data })
  dispatch(fetchAllQuestions())
  } catch (error) {
    console.log(error)
  }
}

export const deleteQuestion = (id, navigate) => async(dispatch) => {
  try {
    const {data } = api.deleteQuestion(id)
    //dispatch({type: 'DELETE_QUESTION', payload: id})
    dispatch(fetchAllQuestions())
    navigate('/')
  } catch (error) {
    console.log(error)
  }
}

export const deleteAnswer = (id, answerId, noOfAnswers) => async(dispatch) => {
  try {
   const {data } = await api.deleteAnswer(id, answerId, noOfAnswers)
   dispatch(fetchAllQuestions())
  } catch (error) {
    console.log(error)
  }
}

export const voteQuestion = (id , value, userId) => async(dispatch) => {
  try {
    const { data } = await api.voteQuestion(id , value, userId)
    dispatch(fetchAllQuestions())
   } catch (error) {
     console.log(error)
   }
}

export const postReview = (ReviewData) => async(dispatch) => {
  try {
    const { id, user_id, question_id, reviewer_id, message } = ReviewData;
    const { data } = await api.postReview(id, user_id, question_id, reviewer_id, message)
    dispatch({ type: 'POST_REVIEW', payload: data})
  } catch (error) {
    console.log(error)
  }
}

export const fetchNotification = (id) => async(dispatch) => {
  try {
    const { data } = await api.fetchNotification(id)
    dispatch({ type: 'FETCH_NOTIFICATION', payload: data})
  } catch (error) {
    console.log(error)
  }
}
export const updateNotification = (id) => async(dispatch) =>{
  try {
    const { data } = await api.updateNotification(id);
    dispatch({ type: 'UPDATE_NOTIFICATION', payload: data})
  } catch (error) {
    console.log(error)
  }

}