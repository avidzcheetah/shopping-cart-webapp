# 🛒 AvidzMart - Shopping Cart Web Application

**AvidzMart** is a full-stack shopping cart web application developed as part of the **IT 3301 / CS 3301 - Web Technologies** module. This application allows users to browse a collection of tech products, view product details, add them to a cart, and proceed to checkout.

🔗 **Live Demo:** [avidzmart.vercel.app](https://avidzmart.vercel.app)

---

## 🚀 Features

- Product listing and filtering
- Product detail view
- Add to cart and cart management
- Checkout simulation
- Backend API using Node.js and MongoDB
- Clean, responsive UI with Tailwind CSS

---

## 🛠️ Technologies Used

### Frontend
- React.js
- React Router
- Tailwind CSS
- Vite

### Backend
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- dotenv

---

## 📁 Project Structure

```

root/
├── src/                 # React frontend
│   ├── components/      # Reusable UI components
│   ├── context/         # Cart state management
│   ├── data/            # (Deprecated) static product data
│   ├── pages/           # Home, Product Detail, Cart, Checkout
│   └── App.jsx, main.jsx
├── server/              # Express backend
│   ├── models/          # Mongoose product schema
│   ├── routes/          # API routes
│   └── server.js        # Main backend file
├── .env                 # Environment variables
├── README.md

```

---

## 🌐 API Endpoint

- `GET /api/products` – Retrieves all products from MongoDB

---

## 📌 Notes

- The initial version used hardcoded data from `src/data/products.js`, which is now replaced by dynamic data fetched from MongoDB Atlas.
- Environment variables (e.g., MongoDB URI) are managed via a `.env` file and not exposed publicly.
- Deployed frontend is hosted on Vercel at [`avidzmart.vercel.app`](https://avidzmart.vercel.app).

---

## 🧑‍🎓 Academic Context

This project was developed as a part of the **IT 3301 / CS 3301 - Web Technologies** module to demonstrate key web development concepts such as:

- Single Page Applications (SPA)
- RESTful API integration
- State management using React Context
- Full-stack deployment (MongoDB + Express + React)

---

## 📷 Screenshots

> *To be added*

---

## 📜 License

This project is for educational purposes only.
```
