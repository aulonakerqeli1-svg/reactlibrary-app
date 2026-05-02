<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# 📚 Library App (React + OpenLibrary API + AI Author Generator)

A modern **Library Web Application** built with **React**, allowing
users to explore books, view details, order books, and generate AI-based
author descriptions.


## 🚀 Features

### 🔐 Authentication

-   User Registration (Reader / Librarian roles)
-   Login with validation
-   LocalStorage-based session handling

### 📖 Books

-   Fetch books from OpenLibrary API
-   View book details (cover, title, description)
-   Browse popular books
-   Search books by genre

### 🛒 Orders

-   Order books
-   Store orders in LocalStorage
-   Remove ordered books from dashboard

### 🤖 AI Author Generator

-   Enter author name
-   Get AI-generated description (via backend API)

### 📊 Dashboard

-   View logged-in user
-   Manage ordered books
-   Logout functionality


## 🛠️ Tech Stack

-   Frontend: React, React Router
-   State Management: useState, useEffect
-   API Requests: Axios & Fetch
-   Storage: LocalStorage
-   Styling: Tailwind CSS


## ⚙️ Installation

``` bash
git clone https://github.com/your-username/library-app.git reactlibrary-app
cd reactlibrary-app
npm install
npm run dev
```


## 🔌 API

OpenLibrary: https://openlibrary.org

AI Endpoint: POST http://localhost:3000/api/author



## ⚠️ Security

Do NOT expose API keys in frontend. Use .env or backend.



## 👩‍💻 Author

Aulona Kerqeli



## 📜 License

MIT License
>>>>>>> f42e030ff56f54a5fd66846d2fe8bdbceefb3a1b
