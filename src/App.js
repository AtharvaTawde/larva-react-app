import "./App.css";

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [hover, setHover] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "IED", path: "/ied-projects" },
    { name: "POE", path: "/poe-projects" },
    { name: "Cybersecurity", path: "/cybersecurity-projects" },
    { name: "AP CSP", path: "/ap-csp-projects" },
    { name: "All Projects", path: "/all-projects" },
  ];

  return (
    <body
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        minHeight: "100vh",
      }}
    >
      <Router>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "50px 50px 0 50px",
          }}
        >
          <h1>Atharva Tawde</h1>
          <div>
            {links.map((link) => {
              return (
                <Link
                  className="link"
                  style={{
                    marginLeft: "10px",
                    marginRight: "10px",
                    color: darkMode ? "white" : "black",
                  }}
                  exact
                  to={link.path}
                >
                  {link.name}
                </Link>
              );
            })}
            <button
              className="toggleDarkMode"
              style={{
                backgroundColor: darkMode
                  ? hover
                    ? "#171717"
                    : "#2E2E2E"
                  : hover
                  ? "#D1D1D1"
                  : "#E8E8E8",
                color: darkMode ? "white" : "black",
              }}
              onClick={() => setDarkMode(!darkMode)}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {darkMode ? "Light" : "Dark"} Mode
            </button>
          </div>
        </div>
        <h3 className={darkMode ? "r1" : "r2"} style={{ paddingLeft: "50px" }}>
          Engineering Portfolio
        </h3>
        <Switch>
          <Route exact path="/ied-projects">
            <Projects props={{ class: "Design", darkMode }} />
          </Route>
          <Route exact path="/poe-projects">
            <Projects props={{ class: "of", darkMode }} />
          </Route>
          <Route exact path="/cybersecurity-projects">
            <Projects props={{ class: "Cyber", darkMode }} />
          </Route>
          <Route exact path="/ap-csp-projects">
            <Projects props={{ class: "Computer", darkMode }} />
          </Route>
          <Route exact path="/all-projects">
            <Projects props={{ class: " ", darkMode }} />
          </Route>
          <Route path="/">
            <Home darkMode={darkMode} />
          </Route>
        </Switch>
      </Router>
    </body>
  );
}

export default App;
