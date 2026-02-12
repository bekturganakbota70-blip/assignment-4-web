Product Management System
  PROJECT DESCRIPTION

    This project is a full-stack Product Management system built with:

         Node.js

         Express.js

         MongoDB Atlas

         JWT Authentication

         Role-Based Access Control (RBAC)

          HTML + JavaScript Frontend

          Deployed on Render

The application allows users to register, log in, and view products.
Only users with the admin role can create, update, and delete products and categories.


Architecture

The project follows MVC (Model-View-Controller) architecture:

models/       → MongoDB schemas  
controllers/  → Business logic  
routes/       → API endpoints  
middleware/   → Authentication & authorization  
public/       → Frontend interface  


 Authentication & Security

Passwords are hashed using bcrypt

Authentication uses JWT (JSON Web Tokens)

Role-Based Access Control:

user → Can view products

admin → Can create, update, delete products & categories


API Endpoints
  Authentication
Register

POST /api/auth/register

{
  "email": "admin@test.com",
  "password": "123456",
  "role": "admin"
}

Login

POST /api/auth/login

Returns JWT token.


Products
Get All Products

GET /api/products

Get Product by ID

GET /api/products/:id

Create Product (Admin Only)

POST /api/products

Update Product (Admin Only)

PUT /api/products/:id

Delete Product (Admin Only)

DELETE /api/products/:id


 Categories
Get All Categories

GET /api/categories

Create Category (Admin Only)

POST /api/categories

Update Category (Admin Only)

PUT /api/categories/:id

Delete Category (Admin Only)

DELETE /api/categories/:id


Start server
npm run dev


Open in browser:

http://localhost:3000

Database

Database is hosted on MongoDB Atlas.
Collections:

users

products

categories

Final Project Goals Achieved

Full CRUD operations

MVC architecture

Secure authentication

Role-based authorization

Full-stack integration

Cloud deployment

Production-ready structure

