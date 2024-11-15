# Wandering Words

A full-stack blog application built using the MERN stack (MongoDB, Express, React, Node.js) with Bootstrap for design.  
Website: [wanderingwords.onrender.com](https://wanderingwords.onrender.com/)

---

# Table of Contents

1. [Description](#description)
2. [Installation](#installation)
   - [0. Prerequisites](#prerequisites)
   - [1. Clone the Repository](#clone-the-repository)
   - [2. Install Backend Dependencies](#install-backend-dependencies)
   - [3. Install Frontend Dependencies](#install-frontend-dependencies)
   - [4. Set Up Environment Variables](#set-up-environment-variables)
   - [5. Run the Application](#run-the-application)
3. [Usage](#usage)
4. [Running in Production](#running-in-production)
   - [Backend Production Configuration](#backend-production-configuration)
   - [Frontend Production Configuration](#frontend-production-configuration)
5. [Contributing](#contributing)
6. [License](#license)
7. [Refer](#refer)

---

## Description

This is a simple blog application built with the **MERN stack** (MongoDB, Express, React, Node.js). It allows users to:
- CRUD actions: View, create, delete and edit blogs.
- Search posts by title. 
- Register, login, and authenticate. (Coming soon 😅)
- Chatbot (Coming soon 😅) 

---

## Installation

### 0. Prerequisites

Before you start, make sure you have the following installed:

- **Node.js** (v16 or later) 
- **npm** (Node package mangament) 
- **MongoDB** (I'm using my MongoDB Atlas link, please replace it by yours)

### 1. Clone the Repository

```bash
git clone https://github.com/HyuOniichan/Huy_WanderingWords.git
cd Huy_WanderingWords
```

### 2. Install Backend Dependencies

Navigate to the backend folder and install the dependencies:

```bash
cd backend
npm install
```

This will install the necessary backend dependencies listed in the package.json file, including:
- express - Web framework for Node.js.
- mongoose - MongoDB object modeling tool.
- cors - Middleware to enable cross-origin requests.
- dotenv - To manage environment variables.
- nodemon - Automatically restart the server when you make changes

### 3. Install Frontend Dependencies

Navigate to the frontend folder and install the dependencies:
```bash
cd frontend
npm install
```
This will install the necessary frontend dependencies listed in the package.json file in order to run React: 

- react - A JavaScript library for building user interfaces.
- react-dom - For rendering React components.
- react-router-dom - For routing in the React application.
- ...

### 4. Set Up Environment Variables

Create a .env file in the backend folder to store your sensitive data. This file will be used to configure MongoDB (and JWT authentication later).

Here’s an example .env file:
```.env
MONGO_URI=YOUR_MONGODB_ATLAS_CONNECTION_STRING
PORT=8000
JWT_SECRET=yoursecretkey
```

### 5. Run the Application

To run both the backend and frontend locally, follow the steps below:

**Backend (Node.js + Express)**
Navigate to the backend folder and run the server:

```bash
cd backend
npm start
```

This will start the backend server using nodemon, which will automatically restart the server when you make changes. 
The backend will be running at ```http://localhost:8000```.

Frontend (React)
In a separate terminal window, navigate to the frontend folder and start the React app:

```bash
cd frontend
npm start
```

This will start the React app, and you can access it at ```http://localhost:3000```.

Now your application should be running both locally, with the React frontend on ```http://localhost:3000``` and the backend API on ```http://localhost:8000```.

## Usage 

Once the application is running, you can visit the frontend React app at ```http://localhost:3000```. Here’s what you can do:

- Create a Blog Post: You can create a new blog post by clicking the 'Create' button on the navbar
- View Blog Posts: View the list of all blog posts by navigate to Blog section. 
- See your profile: Click on the avatar at top-right corner
- Check all your posts and further actions:
  + Choose a blog from list
  + Support following functions: Edit, (Soft) Delete, Explore (Navigate to this blog)  

Upcoming function
- Register a New User: Use the registration form to create a new user account.
- Login: After registration, log in with your username and password.
- Search blogs: Use the search bar to find blogs by title or content.

## Contributing 

You can support me by creating new issue, and I'll handle this problem since this is my personal project. 
I appreciate your help 🫡

## License 

ISC as default? 

## Refer

**Tech stack** - MongoDB, Express, Nodejs, React  
**Style** - Bootstrap  
**Deployment** - Render  











