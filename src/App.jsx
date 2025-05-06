import "./App.css";
import Header from "./Components/Header";
import GameBoard from "./Components/GameBoard";
import GameOver from "./Components/GameOver";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [boardGrid, setGameGrid] = useState(2);
  const [cardElements, setCardElements] = useState([1, 2, 1, 2]);
  const [cardMatched, setCardMatched] = useState([]);
  const [turns, setTurns] = useState(0);
  const [gameover, setgameOver] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [invalidOutput, setInvalidOutput] = useState(
    "Note : choose grid of 2 or 4 or 6 for Better experience"
  );

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  useEffect(() => {
    const isOver = cardMatched.length >= cardElements.length / 2;

    if (isOver) {
      setTimeout(() => {
        setgameOver(true);
      }, 1000);
      const now = Date.now();
      setEndTime(now);
      console.log("End Time:", now);
    }
  }, [cardMatched.length]);

  function getTimePlayed() {
    console.log("result :" + (!startTime || !endTime));
    if (!startTime || !endTime) return "null";

    const diff = Math.floor((endTime - startTime) / 1000); // in seconds
    const mins = Math.floor(diff / 60);
    const secs = diff % 60;
    console.log(`${mins} min(s) and ${secs} sec(s)`);
    return `${mins} min(s) and ${secs} sec(s)`;
  }

  function handleOnChange(event) {
    let value = parseInt(event.target.value);
    if (value === 2 || value === 4 || value === 6) {
      let gridValue = (value * value) / 2;
      let elements = [];

      for (let i = 1; i <= gridValue; i++) {
        elements.push(i);
      }
      setCardElements([...elements, ...elements]);
      setGameGrid(value);
      setInvalidOutput("Note: choose grid of 2, 4, or 6 for better experience");
      setCardMatched([]);
      setTurns(0);
      setStartTime(Date.now());
      setgameOver(false);
    } else {
      setInvalidOutput("❌ Invalid input! Please choose 2, 4, or 6 only.");
    }
  }

  function handleMatchedPairs(pair) {
    setTimeout(() => {
      setCardMatched((prev) => [...prev, pair]);
    }, 500);
  }

  function handleTurns(turn) {
    setTurns(turn);
  }

  function handleRestart() {
    window.location.href = "/";
  }

  return (
    <>
      <Header
        handleOnChange={handleOnChange}
        note={invalidOutput}
        gameover={gameover}
      />
      {!gameover && (
        <GameBoard
          cardElements={cardElements}
          columns={boardGrid}
          handleMatchedPairs={handleMatchedPairs}
          cardMatched={cardMatched}
          handleTurns={handleTurns}
        />
      )}
      {gameover && (
        <GameOver
          turns={turns - 1}
          getTimePlayed={getTimePlayed()}
          restart={handleRestart}
        />
      )}
    </>
  );
}

export default App;
