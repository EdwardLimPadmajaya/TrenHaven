# TrenHaven - Fashion E-Commerce Website

## Overview
TrenHaven is a full-stack fashion e-commerce platform designed to offer a seamless shopping experience. It consists of three main components:

1. **Frontend** - The user-facing interface, featuring pages such as Homepage, Collections, About, Contact, Login, Cart, Orders, and Checkout.
2. **Backend** - Handles business logic, authentication, database interactions, and integrates with Cloudinary and MongoDB.
3. **Admin Panel** - Provides administrative control to manage products and view customer orders.

## Features
### **Frontend**
✅ Elegant UI with responsive design  
✅ User authentication (Login, Register)  
✅ Shopping cart and order checkout  
✅ Secure payment processing via Stripe  
✅ Dynamic product collections and filtering  

### **Backend**
✅ Secure authentication with JWT  
✅ RESTful API endpoints for data operations  
✅ MongoDB database integration  
✅ Cloudinary for image storage  
✅ Robust error handling and middleware support  

### **Admin Panel**
✅ Add, update, and delete products  
✅ Manage product inventory  
✅ View and manage customer orders  
✅ Role-based authentication for admin security

## Folder Structure
```
TrenHaven/
│── frontend/    # React-based client-side application
│── backend/     # Node.js & Express server, API routes, database models
│── admin/       # Admin dashboard for managing store operations
```

## Tech Stack
- **Frontend:** React (Vite), Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB, Cloudinary
- **Admin Panel:** React (Vite), Redux
- **Authentication:** JWT (JSON Web Token)
- **Payments:** Stripe

---

## Setup & Installation

### 1. Clone the Repository
```sh
git clone https://github.com/EdwardLimPadmajaya/trenhaven.git
cd trenhaven
```

### 2. Backend Setup
#### Install Dependencies
```sh
cd backend
npm install
```

#### Create a `.env` File in `backend/`
```env
MONGODB_URI= "your-mongodb-uri"
CLOUDINARY_API_KEY= "your-cloudinary-api-key"
CLOUDINARY_SECRET_KEY= "your-cloudinary-secret"
CLOUD_NAME= "your-cloud-name"
JWT_SECRET= "your-secret-key"
ADMIN_EMAIL= "your-admin-email"
ADMIN_PASSWORD= "your-admin-password"
STRIPE_SECRET_KEY= "your-stripe-secret-key"
```
#### Start the Backend Server
```sh
npm run server
```

---

### 3. Frontend Setup
#### Install Dependencies
```sh
cd ../frontend
npm install
```
#### Create a `.env` File in `frontend/`
```env
VITE_BACKEND_URL=http://localhost:4000
```
#### Start the Frontend
```sh
npm run dev
```

---

### 4. Admin Panel Setup
#### Install Dependencies
```sh
cd ../admin
npm install
```
#### Create a `.env` File in `admin/`
```env
VITE_BACKEND_URL=http://localhost:4000
```
#### Start the Admin Panel
```sh
npm run dev
```

---

## Running the Project
1. **Start the backend server:** `npm run server`
2. **Start the frontend:** `npm run dev`
3. **Start the admin panel:** `npm run dev`

Once started, the frontend website should be accessible at `http://localhost:5173` and the admin website should be accessible at `http://localhost:5174`

---
