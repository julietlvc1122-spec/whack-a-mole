import { Routes, Route } from "react-router";
import WelcomePage from "./Welcomepg";
import Game from "./GamePage";
import GameOver from "./GamePage";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/GamePage" element={<Game />} />
      <Route path="/" element={<GameOver />} />
    </Routes>
  );
}
