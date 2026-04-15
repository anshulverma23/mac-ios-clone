import { useState } from "react";
import "./app.scss";
import Dock from "./components/Dock.jsx";
import Nav from "./components/nav.jsx";
import Github from "./components/windows/Github.jsx";
import Note from "./components/windows/Note.jsx";
import Resume from "./components/windows/Resume.jsx";
import Spotify from "./components/windows/Spotify.jsx";
import Cli from "./components/windows/Cli.jsx";
import github from "react-syntax-highlighter/dist/esm/styles/hljs/github.js";

function App() {
  const [windowState, setwindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  });

  return (
    <main>
      <Nav />
      <Dock windowstate={windowState} setwindowsState={setwindowsState} />
      {windowState.github && (
        <Github windowname="gitHub" windowState={windowState} />
      )}
      {windowState.note && <Note windowname="note" windowState={windowState} />}
      {windowState.resume && (
        <Resume windowname="resume" windowState ={windowState} />
      )}
      {windowState.spotify && (
        <Spotify windowname="spotify" windowState={windowState} />
      )}
      {windowState.cli && <Cli windowname="cli" windowState={windowState} />}
    </main>
  );
}

export default App;
