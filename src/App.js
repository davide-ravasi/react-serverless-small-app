import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Game from "./pages/Game";
import HighScores from "./pages/HighScores";
import GameOver from "./pages/GameOver";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Container } from "./styled/Container";
import { Main } from "./styled/Main";
import GlobalStyle from "./styled/Global";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Main>
        <Container>
          <Navbar />
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/game" element={<Game />} />
              <Route path="/highScores" element={<HighScores />} />
              <Route path="/gameOver" element={<GameOver />} />
            </Routes>
          </div>
        </Container>
      </Main>
    </Router>
  );
}

export default App;
