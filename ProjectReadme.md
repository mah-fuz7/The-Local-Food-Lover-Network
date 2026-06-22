# 🍽️ The Local Food Lover Network

A community-driven food review platform where users can discover, review, and save their favorite local foods and restaurants.

## 🌐 Live Website

Frontend: https://unrivaled-frangollo-af9cb1.netlify.app/

Backend API: https://the-local-food-lover-network-server.onrender.com/

---

## 📖 Project Overview

The Local Food Lover Network is a full-stack web application that allows food enthusiasts to share reviews of local foods, explore reviews posted by others, and maintain a personalized list of favorite reviews.

Users can:

* Browse food reviews
* Search reviews by food name
* Add new reviews
* Update or delete their own reviews
* Save reviews to favorites
* View favorite reviews
* Authenticate securely using Firebase Authentication

---

## 🚀 Features

### 🔐 Authentication

* Firebase Authentication
* Email & Password Login/Register
* Google Sign-In
* Protected Routes
* JWT/Firebase Token Verification

### 📝 Review Management

* Add Food Reviews
* Edit Existing Reviews
* Delete Reviews
* View Review Details
* Latest Reviews Section

### ❤️ Favorite Reviews

* Add Reviews to Favorites
* Prevent Duplicate Favorites
* Remove Reviews from Favorites

### 🔍 Search Functionality

* Search reviews by food name
* Real-time filtering

### 📱 Responsive Design

* Mobile Friendly
* Tablet Friendly
* Desktop Optimized

---

## 🛠️ Technologies Used

### Frontend

* React
* React Router
* Tailwind CSS
* DaisyUI
* Axios
* React Toastify
* Firebase Authentication

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Firebase Admin SDK
* CORS
* Dotenv

### Deployment

* Netlify (Frontend)
* Vercel / Render (Backend)

---

## 📂 Project Structure

```bash
client/
├── src/
├── public/
├── components/
├── pages/
└── hooks/

server/
├── index.js
├── package.json
├── vercel.json
└── .env
```

## 🔑 Environment Variables

### Frontend (.env)

```env
VITE_API_URL=your_backend_url
VITE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id
```

### Backend (.env)

```env
DB_USER=your_database_user
DB_PASS=your_database_password
FIREBASE_SERVICE_ACCOUNT=your_base64_encoded_service_account
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/THE-LOCAL-FOOD-LOVER-NETWORK.git
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

### Backend Setup

```bash
cd server
npm install
npm start
```

---

## 🔐 Protected Routes

* My Reviews
* Add Review
* Favorites

Users must be authenticated to access these routes.

---

## 🎯 Future Improvements

* User Profiles
* Food Categories
* Review Ratings Analytics
* Image Upload Support
* Restaurant Recommendations
* Pagination and Infinite Scrolling

---

## 👨‍💻 Author

Mahafuz 

GitHub: https://github.com/mah-fuz7
