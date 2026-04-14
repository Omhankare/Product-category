<<<<<<< HEAD
in working  
frontend - react.js + tailwind + bootstrap prebuild templates  
backend - node.js , express.js  
database - postgresql  
=======
# 🛒 Product & Category Manager

A full-stack CRUD (Create, Read, Update, Delete) application to manage **Products** and **Categories**.
Built using **React (Frontend)**, **Node.js + Express (Backend)**, and **PostgreSQL (Database)**.

---

## 🚀 Features

### 📦 Product Management

- ➕ Create new product
- 📋 View product list (with pagination)
- ✏️ Edit product details
- ❌ Delete product

### 🗂️ Category Management

- ➕ Create category
- 📋 View categories
- ✏️ Edit category
- ❌ Delete category

---

## 🧑‍💻 Tech Stack

### Frontend

- React.js
- React Router DOM
- Tailwind CSS / Bootstrap

### Backend

- Node.js
- Express.js

### Database

- PostgreSQL

---

## 📁 Project Structure

```
project/
│
├── frontend/
│   ├── components/
│   │   ├── Product.jsx
│   │   ├── Category.jsx
│   │   ├── CreateProductPage.jsx
│   │   ├── EditProductPage.jsx
│   │   ├── CreateCategoryPage.jsx
│   │   └── EditCategoryPage.jsx
│   └── App.jsx
│
├── backend/
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Omhankare/Product-category.git
cd product-category-manager
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
node server.js
```

- Server runs on: `http://localhost:8086`

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

- Frontend runs on: `http://localhost:5173`

---

## 🗄️ API Endpoints

### 📦 Products

| Method | Endpoint        | Description                        |
| ------ | --------------- | ---------------------------------- |
| GET    | `/products`     | Get all products (with pagination) |
| GET    | `/products/:id` | Get single product                 |
| POST   | `/products`     | Create product                     |
| PATCH  | `/products/:id` | Update product                     |
| DELETE | `/products/:id` | Delete product                     |

---

### 🗂️ Categories

| Method | Endpoint          | Description         |
| ------ | ----------------- | ------------------- |
| GET    | `/categories`     | Get all categories  |
| GET    | `/categories/:id` | Get single category |
| POST   | `/categories`     | Create category     |
| PATCH  | `/categories/:id` | Update category     |
| DELETE | `/categories/:id` | Delete category     |

---

## 🧠 Key Concepts Used

- Controlled Components in React
- useState & useEffect Hooks
- REST API Integration
- Dynamic Routing (`useParams`)
- Pagination
- CRUD Operations
- Optimistic UI Updates

---

## 🔥 Future Improvements

- ✅ Category dropdown instead of manual ID input
- 🔍 Search & filter functionality
- 🔔 Toast notifications
- 🔐 Authentication (Login/Register)
- 📊 Dashboard analytics

---

## 👨‍💻 Author

**Om Krishna Hankare**

- B.E. Computer Science (AI/ML)
- Full Stack Developer (MERN)

---

## ⭐ Acknowledgements

This project is built as a **practice + learning project** to understand full-stack CRUD operations and real-world application flow.

---

## 📌 Note

Make sure PostgreSQL is running and database is properly configured before starting backend.

---
>>>>>>> af2a59d (form handle and redirection)
