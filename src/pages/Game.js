import { StyledCharacter, StyledGame, StyledScore, StyledTimer } from "../styled/Game";

export default function Game() {
  return (
    <StyledGame>
      <StyledScore>Score: <strong>0</strong></StyledScore>
      <StyledCharacter>A</StyledCharacter>
      <StyledTimer>Time: <strong>sfsdfdsf</strong></StyledTimer>
    </StyledGame>
  )
}