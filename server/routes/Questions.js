import express from 'express';
import {AskQuestion, getAllQuestions, deleteQuestion, voteQuestion, fetchNotification, postReview, getQuestionById, updateNotification } from '../controllers/Questions.js'
import auth from '../middlewares/Auth.js'

const router = express.Router()
router.post('/Ask',auth, AskQuestion)
router.get('/get', getAllQuestions)
router.get('/getquestion/:id', getQuestionById)
router.delete('/delete/:id',auth, deleteQuestion)
router.patch('/vote/:id', auth, voteQuestion)
router.get('/notification/:id', fetchNotification)
router.patch('/review/:id', auth, postReview)
router.patch('/updatenotification/:id', updateNotification)

export default router;
