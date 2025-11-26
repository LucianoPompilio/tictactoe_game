export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>Congratulations, {winner}!</p>}
      {!winner && <p> tie! </p>}
    <p>
    <button onClick={onRestart}>rematch!</button> 
    </p>
    </div>
  );
}