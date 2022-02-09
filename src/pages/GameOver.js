import { useNavigate } from "react-router-dom";
import { useScore } from "../contexts/ScoreProvider"

export default function GameOver() {
  const navigate = useNavigate();
  const [score] = useScore();

  if (score === -1) {
    navigate("/");
  }

  return (<div>
    GameOver
    Score: {score}
  </div>)
}