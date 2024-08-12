import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";

import "./Notification.css";
import { updateNotification } from "../../actions/question";

const Notification = () => {
  const { id } = useParams();
  const User = useSelector((state) => state.currentUserReducer);
  const userId = User?.result?._id;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNotifications = async () => {
      if (!userId) return; // Early return if no user ID

      try {
        const response = await axios.get(
          `https://stack-overflow-clone-backend-2xqg.onrender.com/questions/notification/${userId}`
        );
        setNotifications(response.data || []); // Fallback to empty array if response.data is undefined
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadNotifications();
  }, [userId]);

  const markNotificationAsRead = async (id) => {
    try {
      dispatch(updateNotification(id))
      console.log("Notification marked as read.");
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };
  const handleNotificationClick = async (notificationId, isRead) => {
    if (!isRead) {
      await markNotificationAsRead(notificationId);
      // Optionally, update the local state to mark the notification as read without a full page reload
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification._id === notificationId
            ? { ...notification, is_read: true }
            : notification
        )
      );
    }
  };

  if (loading) return <p>Loading notifications...</p>;
  if (error) return <p>Error loading notifications: {error}</p>;

  return (
    <div className="notification-container">
      <h1 className="notification-header">Notifications</h1>
      {notifications.length === 0 ? (
        <p>No notifications available.</p>
      ) : (
        <ul className="notification-list">
          {notifications.map((notification) => (
            <li
              key={notification._id}
              className={`notification-item ${
                notification.is_read ? "read" : "unread"
              }`}
            >
              <Link
                to={`/questions/${notification.question_id._id}`}
                style={{ textDecoration: "none", color: "inherit", width: "100%" }}
                // onClick={() => handleNotificationClick(notification._id, notification.is_read)}
                onClick={()=>{
                  if(!notification.is_read){
                    dispatch(updateNotification(notification._id));
                  }
                }}
              >
                <div className="info" id="info">
                  <div className="info-header">
                    <p>
                      <strong>For Question:</strong>{" "}
                      {notification.question_id.questionTitle || "Unknown"}
                    </p>
                    <p className="username">
                      <strong>From:</strong>{" "}
                      {notification.reviewer_id.name || "Unknown"}
                    </p>
                  </div>
                  <div className="info-footer">
                    <p className="timestamp">
                      {" "}
                      sent {moment(notification.created_at).fromNow()}
                    </p>
                  </div>
                </div>
                <div className="message-box">
                  <p>
                    <strong>Message: </strong>
                    {notification.message}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notification;
