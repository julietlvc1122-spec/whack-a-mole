import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Game() {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(10);
  const [molePosition, setMolePosition] = useState(0);
  const holes = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const navigate = useNavigate();
  const [gameStarted, setGameStarted] = useState(false);

  function moveMole() {
    const randomMolePlaces = Math.floor(Math.random() * 9);
    setMolePosition(randomMolePlaces);
  }
  function whackMole() {
    setScore((currentScore) => currentScore + 1);
    moveMole();
  }
  useEffect(() => {
    if (!gameStarted) {
      return;
    }
    const timer = setInterval(() => {
      setTime((currentTime) => {
        if (currentTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return currentTime - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [gameStarted]);

  function GameOver() {
    const oldScores = JSON.parse(localStorage.getItem("scores")) || [];
    if (score > 0) {
      oldScores.push(score);
      oldScores.sort((a, b) => b - a);
      localStorage.setItem("scores", JSON.stringify(oldScores));
    }
    navigate("/");
  }
  useEffect(() => {
    if (time === 0) {
      GameOver();
    }
  }, [time]);

  function Restart() {
    navigate("/");
  }
  return (
    <div className="game-page">
      <h1 className="title">Whack-A-Mole!</h1>
      <div className="game-Starter-buttons">
        <h2 className="text">Time: {time}</h2>
        <button className="buttons" onClick={() => setGameStarted(true)}>
          Start Time
        </button>
        <h2 className="text">Score: {score}</h2>
        <button className="buttons" onClick={Restart}>
          Restart
        </button>
      </div>
      <div className="game-board">
        {holes.map((hole) => (
          <div key={hole} className="hole">
            {gameStarted && hole === molePosition && (
              <button onClick={whackMole}>
                <img className="mole-pic" src="/mole.png" alt="mole" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
