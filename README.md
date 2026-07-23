# 🎓 EduBridge

A comprehensive full-stack education management platform designed to bridge the gap between students, instructors, and courses. EduBridge provides a secure platform where students can explore courses, enroll in learning programs, and track assignments, while administrators can manage users and course content efficiently.

---

## 🚀 Features

### 👨‍🎓 Student
- User Registration & Login
- Secure JWT Authentication
- Browse Available Courses
- View Course Details
- Responsive User Interface

### 👨‍💼 Admin
- Secure Admin Login
- Dashboard
- Add New Courses
- Update Existing Courses
- Delete Courses
- Manage Course Information

---

## 🛠 Tech Stack

### Frontend
- React.js
- HTML5
- CSS3
- JavaScript
- React Router
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JSON Web Token (JWT)
- bcrypt.js

### Tools
- Git
- GitHub
- Postman
- MongoDB Compass
- Visual Studio Code

---

## 📂 Project Structure

```
EduBridge/
├── Backend/
│   ├── controllers/
│   │   ├── assignmentController.js
│   │   ├── courseController.js
│   │   ├── enrollmentController.js
│   │   └── userController.js
│   ├── models/
│   │   ├── assignmentModel.js
│   │   ├── courseModel.js
│   │   ├── enrollmentModel.js
│   │   └── userModel.js
│   ├── routes/
│   │   ├── assignmentRoutes.js
│   │   ├── courseRoutes.js
│   │   ├── enrollmentRoutes.js
│   │   └── userRoutes.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── adminMiddleware.js
│   ├── database/
│   │   └── mongodb.js
│   ├── server.js
│   └── package.json
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   │   └── ThemeContext.jsx
│   │   ├── pages/
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── App.css
│   │   └── index.css
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── index.html
│   └── package.json
│
└── package.json
```

---

## 📦 Installation

### Clone the repository

```bash
git clone https://github.com/sansar20174/Edubridge
cd EduBridge
```

---

## Install Dependencies

### Backend

```bash
cd Backend
npm install
```

### Frontend

```bash
cd Frontend
npm install
```

---

## Environment Variables

Create a `.env` file inside the **Backend** folder.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## ▶️ Run the Project

### Start Backend

```bash
cd Backend
npm start
```

Backend will run on `http://localhost:5000`

### Start Frontend

```bash
cd Frontend
npm run dev
```

Frontend will run on `http://localhost:5173` (Vite default)

---

## 🌐 API Features

- User Authentication
- Course Management
- JWT Authorization
- CRUD Operations
- Error Handling
- Protected Routes

---

## 🔒 Authentication

EduBridge uses:

- JWT Authentication
- Password Hashing with bcrypt.js
- Protected Routes
- Role-Based Authorization

---

## 📱 Responsive Design

The application is fully responsive and works across:

- Desktop
- Tablet
- Mobile Devices

---

## 🚀 Deployment

### Frontend
- Vercel

### Backend
- Render

### Database
- MongoDB Atlas

---

## 📚 Future Enhancements

- Video Course Support
- Quiz & Assessments
- Student Progress Tracking
- Certificate Generation
- Payment Gateway Integration
- Email Notifications
- Live Chat Support

---

## 👨‍💻 Author

**Sansar Kumar**

- GitHub: https://github.com/sansar20174
- LinkedIn: https://www.linkedin.com/in/sansar-kumar-49a232381

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.