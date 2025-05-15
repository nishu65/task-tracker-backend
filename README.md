# task-tracker-backend
*******************************************************************

📁 Folder Structure

task-tracker-backend/

├── controllers/        # Logic for auth, projects, tasks

├── routes/             # Route definitions

├── models/             # Mongoose schemas

├── middleware/         # JWT auth middleware

├── config/             # MongoDB connection

├── .env                # Env variables (not committed)

├── server.js           # Main entry point

└── package.json
*****************************************************************
🚀 Features
🔐 User Signup/Login with JWT

📁 Create/Delete Projects (max 4 per user)

✅ Create/Update/Delete Tasks inside Projects

🔒 Protected routes with middleware

📦 MongoDB/Mongoose for data storage

********************************************************************

🧪 API Endpoints

🔐 Auth

Method	Route	Description

POST	/api/auth/signup	Register a new user

POST	/api/auth/login	Login and get token
****************************************************************************

📁 Projects

Method	Route	Description

GET	/api/project	Get all user's projects

POST	/api/project	Create a new project

DELETE	/api/project/id	Delete a project
*********************************************************************
✅ Tasks

Method	Route	Description

GET	/api/task/:projectId	Get tasks for a project

POST	/api/task	Create a task in a project

PUT	/api/task/id	Update task (status/details)

DELETE	/api/task/id	Delete a task
******************************************************************

⚙️ Environment Variables

Create a .env file:

PORT=5000

MONGO_URI=mongodb+srv://your_user:password@cluster.mongodb.net/task-tracker

JWT_SECRET=your_jwt_secret

⚠️ Never commit .env to Git.
******************************************************************
🛠 Install and Run

git clone https://github.com/nishu65/task-tracker-backend.git

cd task-tracker-backend

npm install

npm run dev

Uses nodemon for auto-reload. Make sure MongoDB is running or use MongoDB Atlas.
*****************************************************************
🔐 Authentication

Get JWT token via /api/auth/login

Send token in headers:

Authorization: Bearer <token>

**************************************************************
✅ Tech Stack

Node.js

Express

MongoDB + Mongoose

JWT (JSON Web Tokens)

bcryptjs (password hashing)

dotenv, cors
*********************************************************************************
🧪 Recommended Testing Tools

Thunder Client (VS Code)

Postman

Curl (CLI)
******************************************************
🧑‍💻 Author
Developed by [NISHANT KUMAR]
