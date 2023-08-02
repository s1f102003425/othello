import { useState } from 'react';
export const useGame = () => {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const directions = [
    [-1, -1],
    [-1, 0],
    [0, -1],
    [1, 1],
    [1, 0],
    [0, 1],
    [1, -1],
    [-1, 1],
  ];
  const onClick = (x: number, y: number) => {
    const newBoard: number[][] = JSON.parse(JSON.stringify(board));
    for (const direction of directions) {
      if (
        board[y + direction[1]] !== undefined &&
        board[y][x] === 0 &&
        board[y + direction[1]][x + direction[0]] === 3 - turnColor
      ) {
        console.log(x, y);
        for (let i = 1; i < 8; i++) {
          if (
            board[y + i * direction[1]] === undefined ||
            board[y + i * direction[1]][x + i * direction[0]] === undefined ||
            board[y + i * direction[1]][x + i * direction[0]] === 0
          ) {
            break;
          } else if (board[y + i * direction[1]][x + i * direction[0]] === 3 - turnColor) {
            continue;
          } else if (board[y + i * direction[1]][x + i * direction[0]] === turnColor) {
            for (let j = i; j > 0; j--) {
              newBoard[y + j * direction[1]][x + j * direction[0]] = turnColor;
            }
            newBoard[y][x] = turnColor;
            setBoard(newBoard);
            setTurnColor(3 - turnColor);
            break;
          }
        }
      }
    }
  };
  // const checkLineStone = (x: number, y: number, direction: number[]) => {};
  return { board, onClick, turnColor };
};