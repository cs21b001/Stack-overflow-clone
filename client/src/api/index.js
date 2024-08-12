import axios from 'axios';

const API = axios.create({ baseURL: 'https://stack-overflow-clone-backend-2xqg.onrender.com' });

API.interceptors.request.use((req)=> {
    if(localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})

export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);

export const postQuestion = (questionData) => API.post('/questions/Ask',questionData);
export const getAllQuestions = () => API.get('/questions/get');
export const getQuestionById = (id) => API.get(`questions/getquestion/${id}`)
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);
export const voteQuestion = (id, value, userId) => API.patch(`/questions/vote/${id}`,{value, userId} )
export const postReview = (id, user_id, question_id, reviewer_id, message) => API.patch(`/questions/review/${id}`, {user_id, question_id, reviewer_id, message});
export const fetchNotification = (id) => API.get(`/questions/notification/${id}`);
export const updateNotification = (id) => API.patch(`/questions/updatenotification/${id}`);

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId) => API.patch(`/answer/post/${id}`, {noOfAnswers, answerBody, userAnswered, userId});
export const deleteAnswer = (id, answerId, noOfAnswers) => API.patch(`/answer/delete/${id}`, {answerId, noOfAnswers});

export const fetchAllUsers = () => API.get('/user/getAllUsers')
export const updateProfile = (id, updatedData) => API.patch(`/user/update/${id}`, updatedData)