import { useState } from 'react';
import './App.css';
import { Word } from './Word';

function App() {
  
  const maxAttempts = 6;
  const [word, setWord] = useState(["", "", "", "", "", ""]);
  const [tries, setTries] = useState(0);
  const [gameStore, setGameStore] = useState([...Array(6).fill([...Array(5).fill(" ")])]);
  console.log(gameStore)

  const handleKeyDown = (e) => {
    console.log(e);
    setGameStore(prevState => [prevState[tries],...prevState])
  }

  
  return (
    <div className="App">
      <header className="App-header"> Worlde </header>
      <div tabIndex={0} onKeyUp={handleKeyDown}>{gameStore.map((boxes, i) => {
        console.log(boxes)
        return <Word key={i} word={boxes} />
      })}</div>
    </div>
  );
}

export default App;
