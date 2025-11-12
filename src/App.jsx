import Player from './components/Player'
function App() {
  return (
   <main>
    <div id="game-container">
      <ol id="players">
        <Player initiateName="Alice" symbol="X" />
        <Player initiateName="Bob" symbol="O" />
      </ol>
      GAME BOARD
    </div>
    LOG
   </main>  
  )
}

export default App
