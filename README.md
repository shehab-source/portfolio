
# Portfolio Website

This is a modern portfolio website built with React and Vite, featuring custom components, interactive text animations, and Tailwind CSS for rapid UI development. The project is structured for scalability and maintainability, making it easy to extend and customize.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Scripts](#scripts)
- [License](#license)

## Features
- Fast development with Vite and React
- Hot Module Replacement (HMR)
- ESLint integration for code quality
- Tailwind CSS for utility-first styling
- Custom text animations and interactive components
- Organized folder structure for easy navigation

## Project Structure
```
portfolio/
├── components/
│   └── TextAnimations/
│       └── TextType/
├── public/
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Custom/
│   │       └── ReactBits/
│   │           └── styles/
│   │               └── lanyard/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Installation
Clone the repository and install dependencies:

```powershell
git clone https://github.com/your-username/portfolio.git
cd portfolio
npm install
# or
yarn install
```

## Running the Project
Start the development server:

```powershell
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173` (default Vite port).

## Scripts
- `dev`: Start the development server with HMR
- `build`: Build the project for production
- `preview`: Preview the production build locally
- `lint`: Run ESLint to check code quality

## License
This project is licensed under the MIT License.
