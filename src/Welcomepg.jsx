import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const navigate = useNavigate();
  const scores = JSON.parse(localStorage.getItem("scores")) || [];
  return (
    <div className="welcome-page">
      <h1 className="title">Whack-A-Mole</h1>

      <h2 className="text">Rules of the game </h2>
      <h2 className="text">Hit the mole as fast as you can to win!</h2>
      <button className="buttons-p1" onClick={() => navigate("/GamePage")}>
        Lets Whack Some Moles
      </button>

      <h2 className="text-L">LeaderBoard</h2>
      <ul className="text-leaderboard">
        {scores.map((score, index) => (
          <li key={index}>
            #{index + 1}: {score}
          </li>
        ))}
      </ul>
    </div>
  );
}
