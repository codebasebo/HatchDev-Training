# Frontend Mentor - Todo App Solution

This is a complete solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW) built with React and TypeScript. Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Built with

- React 18 with TypeScript
- CSS3 with Flexbox and Grid
- React Hooks (useState, useEffect, useReducer, useContext)
- Local Storage for persistence
- Drag and Drop API
- Mobile-first responsive design

### What I learned

This project helped me practice:

- State management with Context API and useReducer
- TypeScript interfaces and type safety
- Drag and drop functionality
- Local storage integration
- Theme switching
- Responsive design patterns

## Getting Started

To run this project locally:

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd Week_13_React_with_Typescript/assignment/todo-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Features

- ✅ Add new todos
- ✅ Mark todos as complete/incomplete
- ✅ Delete individual todos
- ✅ Filter todos by status (All/Active/Completed)
- ✅ Clear all completed todos
- ✅ Drag and drop reordering
- ✅ Light/Dark theme toggle
- ✅ Responsive design
- ✅ Local storage persistence

## Project Structure

```
src/
├── components/
│   ├── TodoInput.tsx
│   ├── TodoItem.tsx
│   └── TodoList.tsx
├── App.tsx
├── App.css
├── TodoContext.tsx
├── types.ts
├── index.tsx
└── index.css
```

## Technologies Used

- React 18
- TypeScript
- CSS3
- HTML5 Drag and Drop API
- Local Storage API
- Context API
- React Hooks

This project demonstrates modern React development practices with TypeScript, including proper component composition, state management, and user experience features like drag-and-drop and theme switching.