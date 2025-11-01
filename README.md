# Stack Overflow Clone

A full-stack web application that replicates the core functionality of Stack Overflow, built with modern web technologies.

## 🚀 Features

- **User Authentication**: Secure signup and login with JWT authentication and bcrypt password hashing
- **Question Management**: 
  - Ask new questions with title, body, and tags
  - View all questions with pagination
  - View individual question details
  - Delete questions (author only)
  - Upvote/downvote questions
- **Answer System**:
  - Post answers to questions
  - Delete answers (author only)
  - Track number of answers per question
- **User Profiles**:
  - View user profiles with join date
  - Edit profile information (bio, tags)
  - Avatar display
- **Tags System**: Browse questions by technology tags (JavaScript, Python, Java, PHP, HTML, CSS, etc.)
- **Notification System**: 
  - Receive notifications for question reviews
  - Mark notifications as read/unread
  - Real-time notification updates
- **Review System**: Post reviews on questions with notifications to question authors
- **Search Functionality**: Search for questions and filter results
- **Responsive Design**: Mobile-friendly interface with modern UI

## 🛠️ Technology Stack

### Frontend
- **React 18.3.1**: UI library
- **React Router DOM 6.23.1**: Client-side routing
- **Redux & Redux Thunk**: State management
- **Axios**: HTTP client
- **Moment.js**: Date formatting
- **FontAwesome**: Icons
- **JWT Decode**: Token decoding

### Backend
- **Node.js**: Runtime environment
- **Express.js 4.19.2**: Web framework
- **MongoDB**: Database
- **Mongoose 8.3.4**: ODM for MongoDB
- **JWT**: Authentication tokens
- **Bcrypt.js**: Password hashing
- **CORS**: Cross-origin resource sharing
- **Dotenv**: Environment variable management

## 📋 Prerequisites

- Node.js (v16.6.1 or higher)
- MongoDB database
- npm or yarn package manager

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/cs21b001/Stack-overflow-clone.git
cd Stack-overflow-clone
```

### 2. Install Dependencies

#### Client Side
```bash
cd client
npm install
```

#### Server Side
```bash
cd server
npm install
```

### 3. Environment Variables

Create a `.env` file in the `server` directory with the following variables:
```
CONNECTION_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

### 4. Run the Application

#### Start the Backend Server
```bash
cd server
npm start
```
The server will run on `http://localhost:5000`

#### Start the Frontend
```bash
cd client
npm start
```
The client will run on `http://localhost:3000`

## 📁 Project Structure

```
Stack-overflow-clone/
├── client/                 # Frontend React application
│   ├── public/            # Public assets
│   ├── src/
│   │   ├── actions/       # Redux actions
│   │   ├── api/           # API calls
│   │   ├── assets/        # Images and SVGs
│   │   ├── components/    # Reusable components
│   │   │   ├── Avatar/
│   │   │   ├── Button/
│   │   │   ├── HomeMainbar/
│   │   │   ├── LeftSidebar/
│   │   │   ├── Navbar/
│   │   │   └── RightSidebar/
│   │   ├── Pages/         # Page components
│   │   │   ├── AskQuestion/
│   │   │   ├── Auth/
│   │   │   ├── Home/
│   │   │   ├── Notification/
│   │   │   ├── PostReview/
│   │   │   ├── Questions/
│   │   │   ├── Tags/
│   │   │   ├── UserProfile/
│   │   │   └── Users/
│   │   └── reducers/      # Redux reducers
│   └── package.json
│
└── server/                # Backend Node.js application
    ├── controllers/       # Route controllers
    │   ├── Answers.js
    │   ├── auth.js
    │   ├── Questions.js
    │   └── users.js
    ├── middlewares/       # Custom middlewares
    │   └── Auth.js
    ├── models/            # Database models
    │   ├── auth.js
    │   ├── Notifications.js
    │   └── Questions.js
    ├── routes/            # API routes
    │   ├── Answer.js
    │   ├── Questions.js
    │   └── users.js
    ├── index.js           # Entry point
    ├── Procfile           # Deployment configuration
    └── package.json
```

## 🔌 API Endpoints

### Authentication
- `POST /user/signup` - Register a new user
- `POST /user/login` - User login

### Questions
- `GET /questions/get` - Get all questions
- `GET /questions/getquestion/:id` - Get question by ID
- `POST /questions/Ask` - Ask a new question (auth required)
- `DELETE /questions/delete/:id` - Delete a question (auth required)
- `PATCH /questions/vote/:id` - Vote on a question (auth required)
- `PATCH /questions/review/:id` - Post a review (auth required)

### Answers
- `PATCH /answer/post/:id` - Post an answer (auth required)
- `PATCH /answer/delete/:id` - Delete an answer (auth required)

### Users
- `GET /user/getAllUsers` - Get all users
- `PATCH /user/update/:id` - Update user profile (auth required)

### Notifications
- `GET /questions/notification/:id` - Fetch user notifications
- `PATCH /questions/updatenotification/:id` - Update notification status

## 🌐 Deployment

The application is configured for deployment:
- **Frontend**: Deployed on Netlify at `https://stackoverflow-client-frontend.netlify.app`
- **Backend**: Deployed on Render at `https://stack-overflow-clone-backend-2xqg.onrender.com`

## 👨‍💻 Author

**Aman Kumar** - cs21b001@iittp.ac.in

## 📝 License

ISC License