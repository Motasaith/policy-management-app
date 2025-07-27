# Azhar's SLIC - State Life Insurance Corporation

This is a full-stack MERN application designed to manage State Life Insurance Corporation policies. The application supports searching for policies and adding new policies via an admin interface.

## Features

- **Frontend**
  - Search policy by CNIC or Policy Number with a user-friendly interface
  - Mobile-friendly design
  - Navigation with React Router

- **Backend**
  - RESTful API built with Express
  - MongoDB database with Mongoose for data modeling
  - Routes for searching, listing, and creating policy entries

## Installation and Setup

### Prerequisites
- Node.js (v14 or later)
- MongoDB installed and running

### Backend
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory and set your environment variables:
   ```plaintext
   MONGODB_URI=your_mongodb_uri
   PORT=5000
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `frontend` directory and set the API URL:
   ```plaintext
   REACT_APP_API_URL=http://localhost:5000
   ```
   
   **Note:** You can copy from the example file:
   ```bash
   cp .env.example .env
   ```
4. Start the React development server:
   ```bash
   npm start
   ```

## Deployment

### Backend
To deploy the backend to Render, follow their documentation for deploying Node.js applications. Ensure your environment variables are set in Render's dashboard.

### Frontend
To deploy the frontend to Vercel, follow Vercel's deployment guide for React applications. Ensure your environment variables are set in Vercel's dashboard.

## Usage
- Access the app at `http://localhost:3000` for the frontend.
- Admin panel is accessible at `http://localhost:3000/admin`.
- Backend runs on `http://localhost:5000`.

