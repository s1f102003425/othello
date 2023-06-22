import { Cell } from '../components/Cell';
import { useGame } from '../hooks/useGame';
import styles from './index.module.css';

const Home = () => {
  const { board, onClick, turnColor } = useGame();
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <Cell key={`${x}-${y}`} x={x} y={y} color={color} onClick={() => onClick(x, y)} />
          ))
        )}
      </div>
      <p>{turnColor === 1 ? '黒' : '白'}の手盤です</p>
    </div>
  );
};
export default Home;
