import { useState } from 'react';
export const useGame = () => {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
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
    let newBoard: number[][] = JSON.parse(JSON.stringify(board));
    newBoard = board.map((row) => {
      return row.map((col) => {
        return col === -1 ? 0 : col;
      });
    });
    for (const direction of directions) {
      if (
        newBoard[y + direction[1]] !== undefined &&
        newBoard[y][x] === 0 &&
        newBoard[y + direction[1]][x + direction[0]] === 3 - turnColor
      ) {
        console.log(x, y);
        for (let i = 1; i < 8; i++) {
          if (
            newBoard[y + i * direction[1]] === undefined ||
            newBoard[y + i * direction[1]][x + i * direction[0]] === undefined ||
            newBoard[y + i * direction[1]][x + i * direction[0]] === 0
          ) {
            break;
          } else if (newBoard[y + i * direction[1]][x + i * direction[0]] === 3 - turnColor) {
            continue;
          } else if (newBoard[y + i * direction[1]][x + i * direction[0]] === turnColor) {
            for (let j = i; j > 0; j--) {
              newBoard[y + j * direction[1]][x + j * direction[0]] = turnColor;
            }
            break;
          }
        }
      }
    }
    newBoard[y][x] = turnColor;
    //  候補地を出す
    let candidateCount = 0;
    for (let subX = 0; subX < 8; subX++) {
      for (let subY = 0; subY < 8; subY++) {
        for (const direction of directions) {
          if (
            newBoard[subY + direction[1]] !== undefined &&
            newBoard[subY][subX] === 0 &&
            newBoard[subY + direction[1]][subX + direction[0]] === turnColor
          ) {
            for (let i = 1; i < 8; i++) {
              if (
                newBoard[subY + i * direction[1]] === undefined ||
                newBoard[subY + i * direction[1]][subX + i * direction[0]] === undefined ||
                newBoard[subY + i * direction[1]][subX + i * direction[0]] === 0
              ) {
                break;
              } else if (newBoard[subY + i * direction[1]][subX + i * direction[0]] === turnColor) {
                continue;
              } else if (
                newBoard[subY + i * direction[1]][subX + i * direction[0]] ===
                3 - turnColor
              ) {
                newBoard[subY][subX] = -1;
                candidateCount++;
                break;
              }
            }
          }
        }
      }
    }
    console.table(newBoard);
    setBoard(newBoard);
    if (candidateCount !== 0) {
      setTurnColor(3 - turnColor);
    }
  };

  return { board, onClick, turnColor };
};
