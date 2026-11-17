# 🎮 Tic Tac Toe Game

A simple and interactive **Tic Tac Toe** game built using HTML, CSS, and JavaScript. This project allows two players to play against each other, take turns marking O and X, and automatically detects the winner or a draw.

## 🌟 Features

- 🎯 Two-player gameplay (O vs X).
- 🔄 Automatic turn switching between O and X.
- 🏆 Automatic winner detection.
- 🤝 Draw detection when all 9 boxes are filled without a winner.
- 🎨 Different colors for O (Blue) and X (Red).
- 🔁 Reset button to restart the game.
- 🆕 New Game button after winning or drawing.
- 🚫 Prevents players from selecting an already-filled box.
- 📱 Responsive layout using CSS Flexbox and viewport units.

## 🛠️ Technologies Used

- **HTML5** – Structure of the game.
- **CSS3** – Styling, layout, colors, and responsive design.
- **JavaScript** – Game logic, event handling, turn management, and winner detection.

## 📂 Project Structure

```text
Tic-Tac-Toe/
│
├── index.html       # HTML structure
├── style.css        # CSS styling
├── app.js           # JavaScript game logic
└── README.md        # Project documentation
```

## 🎮 How to Play

1. Open the game in your browser.
2. Player O starts the game.
3. Player X takes the next turn.
4. Players take turns selecting an empty box.
5. The first player to get three identical symbols in a row, column, or diagonal wins.
6. If all 9 boxes are filled and no player wins, the game ends in a draw.
7. Click **RESET** or **NEW GAME** to play again.

## 🏆 Winning Conditions

There are 8 possible winning combinations:

- 3 Horizontal combinations.
- 3 Vertical combinations.
- 2 Diagonal combinations.

The game checks these combinations after every move to determine the winner.

## 🚀 How to Run Locally

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/Tic-Tac-Toe.git
   ```

2. Open the project folder:

   ```bash
   cd Tic-Tac-Toe
   ```

3. Open `index.html` in your web browser.

Alternatively, open the project in VS Code and run it using the Live Server extension.

## 📚 What I Learned

While building this project, I practised:

- DOM Manipulation in JavaScript.
- JavaScript Event Listeners.
- Arrow Functions and Callback Functions.
- Arrays and Nested Arrays.
- Conditional Statements.
- Working with CSS properties through JavaScript.
- Implementing game logic.
- Using Git and GitHub for version control.

## 🔮 Future Improvements

- Add a score counter for both players.
- Add a single-player mode with AI.
- Add sound effects.
- Improve animations and user interface.
- Add a player name customization feature.

## 👨‍💻 Author

**Aman Mishra**

B.Tech – Electronics and Communication Engineering

LNCT Bhopal

---

⭐ If you like this project, don't forget to give it a star!