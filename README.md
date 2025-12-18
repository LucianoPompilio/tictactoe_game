# Tic Tac Toe – React Essentials App  
A classic **Tic Tac Toe** game built to practice essential **React** concepts, including props, lifting state up, derived state, controlled components, dynamic rendering, and event handling.

---

## ✨ Features
- 🎮 Full two-player Tic Tac Toe game (X and O)  
- 🧠 Derived state to determine the active player  
- 🔄 Turn history tracking with an interactive log  
- ✏️ Editable player names  
- 🗃️ Dynamically rendered game board  
- 🥇 Automatic winner detection using predefined combinations  
- 🔁 Easy game reset  

---

## 📦 Node Requirements

To run this application, you need to have:

- **Node.js >= 18.0.0**
- (Optional but recommended) **npm >= 9.0.0**

Check your versions with:

```bash
node -v
npm -v

```
## 🚀 Installation & Quick Start
### Clone the repository
git clone https://github.com/yourname/tic-tac-toe-react
cd tic-tac-toe-react

### Install dependencies
npm install

### Start in development mode
npm run dev

## 🧰 Tech Stack
- **React**
- **JavaScript**
- **CSS**
- **Node.js** (required to run the environment)

---

## 📘 Usage

### Editing Player Names
In the **Player** component, you can edit a player's name by clicking the ✏️ button.  
This is implemented as a **controlled component** using `useState`.

### Making a Move
When you click on a square in the **GameBoard**, the move is recorded and React recalculates:

- the active player  
- the updated game board  
- whether there is a winner  

### Viewing the Turn Log
The **Log** component displays the full history of moves made during the game.

---

### Description
- **Player.jsx:** Handles player name editing and display  
- **GameBoard.jsx:** Renders the board and handles user interactions  
- **Log.jsx:** Displays the move history  
- **GameOver.jsx:** Shows the winner or a draw  
- **App.jsx:** Main application logic and global state  
- **winning-combinations.js:** Defines the winning combinations  

---

## 🏗️ Architecture Overview

The app follows three key React principles:

### 1. Single Source of Truth
The main state (`gameTurns`) lives in **App**.

### 2. Derived State
The active player and the game board are **computed from the turn history**, not stored separately.

### 3. One-Way Data Flow
Data flows from **App** down to child components via props.

## 🙌 Credits

This project was developed as part of a **React Essentials** learning journey, with guidance and support from **NanLabs** and **Udemy**.
