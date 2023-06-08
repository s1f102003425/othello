import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
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
    let ok = false;
    for (const direction of directions) {
      if (board[y + direction[1]] === undefined) {
        continue;
      }
      if (board[y][x] === 0 && board[y + direction[1]][x + direction[0]] === 3 - turnColor) {
        console.log(x, y);
        for (let i = 1; i < 8; i++) {
          if (board[y + i * direction[1]][x + i * direction[0]] === undefined) {
            break;
          } else if (board[y + i * direction[1]][x + i * direction[0]] === 0) {
            break;
          } else if (board[y + i * direction[1]][x + i * direction[0]] === 3 - turnColor) {
            continue;
          } else if (board[y + i * direction[1]][x + i * direction[0]] === turnColor) {
            for (let j = i; j > 0; j--) {
              newBoard[y + j * direction[1]][x + j * direction[0]] = turnColor;
            }
            ok = true;
            break;
          }
        }
      }
    }
    if (ok) {
      newBoard[y][x] = turnColor;
      setBoard(newBoard);
      setTurnColor(3 - turnColor);
    }
    /*if (board[y][x] === 0 && board[y + 1][x] === 3 - turnColor) {
      console.log(x, y);
      const newBoard: number[][] = JSON.parse(JSON.stringify(board));
      for (let i = 1; i < 8; i++) {
        if (board[y + i] === undefined) {
          break;
        } else if (board[y + i][x] === 0) {
          break;
        } else if (board[y + i][x] === 3 - turnColor) {
          continue;
        } else if (board[y + i][x] === turnColor) {
          for (; i > -1; i--) {
            newBoard[y + i][x] = turnColor;
            setBoard(newBoard);
          }
          setTurnColor(3 - turnColor);
          break;
        }
      }
    }*/
    //if (board[y + 1] !== undefined && board[y + 1][x] !== 0 && board[y + 1][x] !== turnColor) {
    //newBoard[y][x] = turnColor;
    //setTurnColor(3 - turnColor);
  };
  //setBoard(newBoard);

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => onClick(x, y)}>
              {color !== 0 && (
                <div
                  className={styles.stone}
                  style={{ background: color === 1 ? '#000' : '#fff' }}
                />
              )}
            </div>
          ))
        )}
      </div>
      <p>{turnColor === 1 ? '黒' : '白'}の手盤です</p>
    </div>
  );
};
export default Home;
