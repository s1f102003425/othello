import { useState } from 'react';
export const useGame = () => {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, -1, 0, 0, 0, 0],
    [0, 0, -1, 2, 1, 0, 0, 0],
    [0, 0, 0, 1, 2, -1, 0, 0],
    [0, 0, 0, 0, -1, 0, 0, 0],
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
    if (board[y][x] === -1) {
      newBoard = board.map((row) => {
        return row.map((col) => {
          return col === -1 ? 0 : col;
        });
      });
    }
    for (const direction of directions) {
      if (
        // newBoard[y + direction[1]] !== undefined &&
        board[y][x] === -1
        // newBoard[y + direction[1]][x + direction[0]] === 3 - turnColor
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
            break;
          }
        }
      }
    }
    let candidateCount = 0;
    if (board[y][x] === -1) {
      candidateCount = makeCandidate(newBoard, turnColor, candidateCount);
    }
    if (candidateCount === 0) {
      makeCandidate(newBoard, 3 - turnColor, candidateCount);
    } else {
      setTurnColor(3 - turnColor);
    }
    //  候補地を出す

    // let candidateCount = 0;
    // for (let subX = 0; subX < 8; subX++) {
    //   for (let subY = 0; subY < 8; subY++) {
    //     for (const direction of directions) {
    //       if (
    //         newBoard[subY + direction[1]] !== undefined &&
    //         newBoard[subY][subX] === 0 &&
    //         newBoard[subY + direction[1]][subX + direction[0]] === turnColor
    //       ) {
    //         for (let i = 1; i < 8; i++) {
    //           if (
    //             newBoard[subY + i * direction[1]] === undefined ||
    //             newBoard[subY + i * direction[1]][subX + i * direction[0]] === undefined ||
    //             newBoard[subY + i * direction[1]][subX + i * direction[0]] === 0
    //           ) {
    //             break;
    //           } else if (newBoard[subY + i * direction[1]][subX + i * direction[0]] === turnColor) {
    //             continue;
    //           } else if (
    //             newBoard[subY + i * direction[1]][subX + i * direction[0]] ===
    //             3 - turnColor
    //           ) {
    //             newBoard[subY][subX] = -1;
    //             candidateCount++;
    //             break;
    //           }
    //         }
    //       }
    //     }
    //   }
    // }

    setBoard(newBoard);
  };
  const makeCandidate = (
    candidateBoard: number[][],
    turnPlayerColor: number,
    candidateCount: number
  ) => {
    candidateCount = 0;
    for (let subX = 0; subX < 8; subX++) {
      for (let subY = 0; subY < 8; subY++) {
        for (const direction of directions) {
          if (
            candidateBoard[subY + direction[1]] !== undefined &&
            candidateBoard[subY][subX] === 0 &&
            candidateBoard[subY + direction[1]][subX + direction[0]] === turnPlayerColor
          ) {
            for (let i = 1; i < 8; i++) {
              if (
                candidateBoard[subY + i * direction[1]] === undefined ||
                candidateBoard[subY + i * direction[1]][subX + i * direction[0]] === undefined ||
                candidateBoard[subY + i * direction[1]][subX + i * direction[0]] === 0
              ) {
                break;
              } else if (
                candidateBoard[subY + i * direction[1]][subX + i * direction[0]] === turnPlayerColor
              ) {
                continue;
              } else if (
                candidateBoard[subY + i * direction[1]][subX + i * direction[0]] ===
                3 - turnPlayerColor
              ) {
                candidateBoard[subY][subX] = -1;
                candidateCount++;
                break;
              }
            }
          }
        }
      }
    }
    return candidateCount;
  };

  return { board, onClick, turnColor };
};
