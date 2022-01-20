import { useState, useEffect } from 'react';
import { StyledCharacter, StyledGame, StyledScore, StyledTimer } from "../styled/Game";
import { useNavigate } from "react-router-dom";

export default function Game() {
  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [character, setCurrentCharacter] = useState("");
  const [ms, setMs] = useState(0);
  const MAX_SECONDS = 90;
  const navigate = useNavigate();
  const randomChar = "abcdefghijklmnopqrstuvxyz0123456789";

  useEffect(() => {
    const startDate = new Date();
    const interval = setInterval(() => updateTime(startDate), 1);

    setRandomCharacter();

    return () => {
      clearInterval(interval);
    }
  }, [])

  useEffect(() => {
    document.addEventListener("keyup", keyupListener);

    return () => document.removeEventListener("keyup", keyupListener);
  }, []);

  useEffect(() => {
    if (seconds <= -1) {
      navigate('/gameOver');
    }
  }, [seconds]);

  const keyupListener = (e) => {
    console.log(e.key);
  }

  const setRandomCharacter = () => {
    const randomInt = Math.floor(Math.random() * 35);

    setCurrentCharacter(randomChar[randomInt]);
  }

  const updateTime = (startTime) => {
    const endTime = new Date();
    const TimePassed = (endTime.getTime() - startTime.getTime()).toString().padStart(5, '0');
    const SecondsPassed = MAX_SECONDS - parseInt(TimePassed.substring(0, 2)) - 1;
    const MsPassed = 1000 - parseInt(TimePassed.substring(TimePassed.length - 3));

    setSeconds(SecondsPassed.toString().padStart(2, '0'));
    setMs(MsPassed.toString().padStart(3, '0'));
  }

  return (
    <StyledGame>
      <StyledScore>Score: <strong>{score}</strong></StyledScore>
      <StyledCharacter>{character}</StyledCharacter>
      <StyledTimer>Time: <strong>{seconds}:{ms}</strong></StyledTimer>
    </StyledGame>
  )
}