```markdown
# 🍔 Crave Cab (Food order app)
MERN Stack

## 📌 Overview
A full‑stack food ordering and restaurant management web application built with **React**, **Redux Toolkit**, **Node.js**, **Express**, and **MongoDB**.  
It supports:
- User authentication (login, register, profile update)
- Restaurant and menu management
- Cart and order handling
- Coupon and AI‑based review analysis
- Modular backend with controllers, routes, and services

---

## 🛠 Tech Stack
| Layer      |                         Technologies                         |
|------------|--------------------------------------------------------------|
| Frontend   |            React, Redux Toolkit, Axios, Vite                 |
| Backend    |                Node.js, Express.js, MongoDB                  |
| Other      | Cloudinary (image upload), JWT (auth), Pug (email templates) |

---

## ⚙️ Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/Food_Project_App.git
cd Food_Project_App
```

### 2️⃣ Install dependencies
#### Backend
```bash
cd Backend
npm install
```

#### Frontend
```bash
cd Frontend
npm install
```

---

## 🔑 Environment Variables

### Backend `.env`
```
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Frontend `.env`
```
VITE_API_URL=http://localhost:8080/api/v1
```

---

## 🚀 Running the App

### Start Backend
```bash
cd Backend
npm start
```

### Start Frontend
```bash
cd Frontend
npm run dev
```

Then open:  
👉 `http://localhost:5173`

---

## 📂 Project Structure

### Backend
```
Backend/
 ├── config/
 ├── controllers/
 ├── middlewares/
 ├── models/
 ├── routes/
 ├── services/
 ├── utils/
 ├── view/
 ├── app.js
 ├── server.js
 └── package.json
```

### Frontend
```
Frontend/
 ├── public/
 ├── src/
 │   ├── Components/
 │   ├── redux/
 │   ├── utils/
 │   ├── App.jsx
 │   ├── main.jsx
 │   └── index.css
 ├── vite.config.js
 └── package.json
```

---

## 🧪 Features
- 🔐 Secure JWT authentication
- 🏪 Restaurant and menu management
- 🛒 Cart and order system
- 🎟 Coupon handling
- 🤖 AI review analyzer
- 📤 Cloudinary image uploads
- ⚡ Fast frontend with Vite

---

## 📌 Future Enhancements
- Add admin dashboard
- Improve AI review accuracy
- Add order tracking and notifications
- Deploy to cloud (Render / Vercel / MongoDB Atlas)

---

## 👨‍💻 Author
Developed by **Abinithi KB**
```

---
