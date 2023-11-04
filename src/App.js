import logo from "./logo.svg";
import "./App.css";
import Topbar from "./components/topbar/Topbar";
import AboutMe from "./pages/aboutme/AboutMe";
import Projects from "./pages/projects/Projects";
import Bottombar from "./components/bottombar/Bottombar";

function App() {
  return (
    <div className="App">
      <div style={{ position: "fixed", zIndex: "999" }}>
        <Topbar />
      </div>
      <div>
        <AboutMe />
        <Projects />
        <Bottombar />
      </div>
    </div>
  );
}

export default App;
