Login-SignUp-Form-using-React-Vite

This project is a simple Login and Signup Form built using React and Vite with a MongoDB backend for authentication. Users can sign up, log in, and see a welcome message upon successful login.

Table of Contents:
Project Overview
Technologies Used
Features
Prerequisites
Installation
Running the Application
Project Structure
Environment Variables
Backend API
Frontend Components


Project Overview:
This project is a full-stack login and signup application. It allows users to create an account and log in using credentials stored in MongoDB. Upon successful login, users are redirected to a welcome page.

Technologies Used:

Frontend:
React (with Vite)
Tailwind CSS (or your preferred CSS library)

Backend:
Node.js
Express.js
MongoDB (Atlas)
Mongoose
JWT for authentication

Features:
User Sign-up
User Login
Authentication using JWT
Welcome screen after successful login
Responsive design
Prerequisites
Node.js (v14 or higher)
MongoDB Atlas account

Installation:
1. Clone the repository:
git clone https://github.com/yourusername/yourrepository.git
cd your repository

2. Backend Setup:
Navigate to the backend folder:

cd backend
Install backend dependencies:

npm install
Create a .env file in the backend folder and add the following variables:

env
MONGO_URI=<your_mongo_db_connection_string>
JWT_SECRET=<your_jwt_secret>
PORT=5001


3. Frontend Setup:
Navigate to the frontend folder (the root folder):

cd ../
Install frontend dependencies:
npm install

Running the Application:
1. Start the backend:
In the backend folder, run:
npm start

2. Start the frontend:
In the root folder, run:

npm run dev
The app will run at http://localhost:3000.

Project Structure
plaintext
Login-SignUp-Form-using-React-Vite-main/
│
├── backend/
│   ├── models/
│   │   └── User.js      # Mongoose schema for User
│   ├── routes/
│   │   └── auth.js      # Authentication routes (Signup, Login)
│   ├── db.js            # MongoDB connection using Mongoose
│   ├── index.js         # Main server file (Express setup)
│   ├── .env             # Environment variables
│   └── package.json     # Backend dependencies
│
├── public/
│   └── index.html       # Base HTML file
│
├── src/
│   ├── Components/
│   │   └── LoginSignUp/
│   │       ├── Login.js           # Login component
│   │       ├── LoginSignUp.css    # Styling for the login/signup page
│   │       └── LoginSignUp.jsx    # Main login/signup form component
│   ├── App.js            # Main React App file
│   ├── index.js          # ReactDOM rendering
│   ├── Welcome.js        # Welcome page after login
│   └── package.json      # Frontend dependencies
└── README.md             # Project documentation

Environment Variables
In the backend/.env file, define the following variables:


MONGO_URI=<your_mongo_db_connection_string>
JWT_SECRET=<your_jwt_secret>
PORT=5001
Backend API
1. Signup:
Endpoint: /api/auth/signup
Method: POST
Description: Creates a new user in MongoDB.

Request Body:
{
  "name": "Arif",
  "email": "arif@example.com",
  "password": "securepassword"
}

2. Login:
Endpoint: /api/auth/login
Method: POST
Description: Logs in an existing user and returns a JWT token.
Request Body:
{
  "email": "arif@example.com",
  "password": "securepassword"
}
Frontend Components
1. LoginSignUp.jsx
This component renders the login and signup form, handling user input and form submission.

2. Welcome.js
This component displays a welcome message after a user successfully logs in.

3. App.js
The main component that routes between the login form and the welcome screen.

#Screenshot
![Screenshot (515)](https://github.com/user-attachments/assets/c6748b4e-7476-487e-bec0-4bc222aad472)
![Screenshot (513)](https://github.com/user-attachments/assets/89646b71-fc0f-424a-8e2e-70b469758187)
![Screenshot (511)](https://github.com/user-attachments/assets/2a6e95f7-354f-4684-9dc3-cd26bbccf603)


Thank You.
