import Questions from "../models/Questions.js";
import Notification from "../models/Notifications.js";
import mongoose from "mongoose";

export const AskQuestion = async (req, res) => {
  const postQuestionData = req.body;
  const postQuestion = new Questions(postQuestionData);
  try {
    await postQuestion.save();
    res.status(200).json(" Posted a Question succesfully");
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: "Something went wrong" });
  }
};

export const getAllQuestions = async (req, res) => {
  try {
    const questionList = await Questions.find();
    res.status(200).json(questionList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getQuestionById = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Question unavailable..");
  }
  try {
    const question = await Questions.findById(_id);
    res.status(200).json(question);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteQuestion = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Question unavailable..");
  }
  try {
    await Questions.findByIdAndDelete(_id);
    res.status(200).json({ message: "Question deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const voteQuestion = async (req, res) => {
  const { id: _id } = req.params;
  const { value, userId } = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Question unavailable..");
  }
  try {
    const question = await Questions.findById(_id);
    const upIndex = question.upVote.findIndex((id) => id === String(userId));
    const downIndex = question.downVote.findIndex(
      (id) => id === String(userId)
    );
    if (value === "upvote") {
      if (downIndex !== -1) {
        question.downVote = question.downVote.filter(
          (id) => id !== String(userId)
        );
      }
      if (upIndex === -1) {
        question.upVote.push(userId);
      } else {
        question.upVote = question.upVote.filter((id) => id !== String(userId));
      }
    } else if (value === "downvote") {
      if (upIndex !== -1) {
        question.upVote = question.upVote.filter((id) => id !== String(userId));
      }
      if (downIndex === -1) {
        question.downVote.push(userId);
      } else {
        question.downVote = question.downVote.filter(
          (id) => id !== String(userId)
        );
      }
    }
    await Questions.findByIdAndUpdate(_id, question);
    res.status(200).json({ message: "Voted successfully..." });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "id not found..." });
  }
};

export const postReview = async (req, res) => {
  const ReviewData = req.body;
  console.log(ReviewData);
  // Create a new notification document
  const newNotification = new Notification(ReviewData);
  // console.log(newNotification);
  // console.log({
  //   user_id: newNotification.user_id,
  //   question_id: newNotification.question_id,
  //   reviewer_id: newNotification.reviewer_id,
  //   message: newNotification.message,
  //   created_at: newNotification.created_at
  // });

  try {
    await newNotification.save();
    res.status(200).json(" Posted a Review succesfully");
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: "Something went wrong" });
  }
};

export const fetchNotification = async (req, res) => {
  const { id: userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(404).send("User does not exist.");
  }

  try {
    const notifications = await Notification.find({ user_id: userId })
      .populate('user_id', 'name')         // Populate user details (only 'name' field)
      .populate('reviewer_id', 'name')     // Populate reviewer details (only 'name' field)
      .populate('question_id', 'questionTitle');   // Populate question details (only 'title' field)
    
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateNotification = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Notification does not exist.");
  }

  try {
    const updatedNotification = await Notification.findByIdAndUpdate(
      _id,
      { is_read: true }
    );

    if (!updatedNotification) {
      return res.status(404).send("Notification not found.");
    }

    
   res.status(200).json({ message: "readStatus updated successfully..." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
