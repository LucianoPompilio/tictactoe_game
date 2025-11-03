import Player from './components/Player'
function App() {
  return (
   <main>
    <div id="game-container">
      <ol id="players">
        <Player name="Alice" symbol="X" />
        <Player name="Bob" symbol="O" />
      </ol>
      GAME BOARD
    </div>
    LOG
   </main>  
  )
}

export default App
