import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { AddTutorial } from "./components/AddTutorial";
import { Tutorial } from "./components/Tutorial";
import { TutorialsList } from "./components/TutorialsList";
import { ViteOrigin } from "./components/ViteOrigin";

function App() {
  return (
    <>
      <nav
        className="navbar navbar-expand navbar-dark bg-dark"
        style={{ width: "100vw" }}
      >
        <a href="/tutorials" className="navbar-brand">
          bezKoder
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/viteorigin"} className="nav-link">
              Vite Origin
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<TutorialsList />} />
          <Route path="/tutorials" element={<TutorialsList />} />
          <Route path="/add" element={<AddTutorial />} />
          <Route path="/tutorials/:id" element={<Tutorial />} />
          <Route path="/viteorigin" element={<ViteOrigin />} />
          <Route path="*" element={<Navigate to="/" />} replace />
        </Routes>
      </div>
    </>
  );
}

export default App;
