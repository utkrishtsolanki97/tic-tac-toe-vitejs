# Tic Tac Toe - React + Vite

**Project Link :** https://utkrisht-tic-tac-toe-vitejs.vercel.app/

This is a simple Tic Tac Toe game built using React and Vite. It allows two players to play the classic Tic Tac Toe game in a web browser.

## Features
- Two-player mode
- Single-player mode with Easy and Impossible levels
- Simple and clean UI
- Game status updates (ongoing, win, or draw)
- Option to restart the game
- Player name input before starting
- Interactive game grid with real-time updates

## Screenshots
![image](https://github.com/user-attachments/assets/cdbfc4e4-4eb4-4095-b4b1-d52637c65145)
![image](https://github.com/user-attachments/assets/68664325-cf7d-42d6-bc14-764545b3c331)
![image](https://github.com/user-attachments/assets/1fcbf20a-6b37-4309-9a81-d2ee62168744)
![image](https://github.com/user-attachments/assets/bc224225-cf75-48e3-90ba-9d1134073851)
![image](https://github.com/user-attachments/assets/ffb211cb-7366-4e56-ac7b-69a596923e45)
![image](https://github.com/user-attachments/assets/3c7aed61-5347-4943-a5a1-bd9c959050c7)


## Technologies Used
- React
- Vite
- HTML & CSS
- JavaScript

## How to Play
- Enter player names and start the game.
- Players take turns marking X or O on the grid.
- The first player to get three marks in a row (horizontally, vertically, or diagonally) wins.
- If all cells are filled without a winner, the game ends in a draw.
- Players can restart the game at any time.

## 	Single-Player Mode 
The single-player mode allows you to play against the computer. It includes two difficulty levels: 

### Easy Mode 

- Random Moves: In this mode, the computer makes random moves. It doesn't follow any specific strategy, making it easier for the player to win. 
- Ideal for Beginners: This mode is perfect for those who are new to Tic Tac Toe and want to practice without much challenge. 

### Impossible Mode 

- Minimax Algorithm: This mode uses the minimax algorithm, which is a decision-making algorithm used in game theory and artificial intelligence. The computer evaluates all possible moves and selects the optimal one to either win or prevent the player from winning. 
- Challenging Gameplay: This mode is designed to be unbeatable, providing a significant challenge even for experienced players. The computer will always make the best possible move, ensuring that it either wins or forces a draw.

## Future Enhancements
- Improve UI/UX with animations.
- Keep track of player scores across multiple games.

## License
This project is open-source and free to use.

## Installation & Setup

1. **Clone the repository:**
```
git clone <repository-url>
cd tic-tac-toe
```

2. **Install dependencies:**
```
npm install
```
3. **Run the application:**
```
npm run dev
```

4. **Open the application in your browser at:**
```
http://localhost:5173
```
