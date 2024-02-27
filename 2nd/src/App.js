import "./App.css";
import React, { useState } from "react";
import News from "./components/News";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = ()=> {
  const PageSize = 15;
  const [progress, setProgress] = useState(0)
  const SetProgress = (progress) => {
    setProgress(progress);
  };
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={SetProgress}
                  key="general"
                  pageSize={PageSize}
                  country="us"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="business"
              element={
                <News
                  setProgress={SetProgress}
                  key="business"
                  pageSize={PageSize}
                  country="us"
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="entertainment"
              element={
                <News
                  setProgress={SetProgress}
                  key="entertainment"
                  pageSize={PageSize}
                  country="us"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="general"
              element={
                <News
                  setProgress={SetProgress}
                  key="general"
                  pageSize={PageSize}
                  country="us"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="health"
              element={
                <News
                  setProgress={SetProgress}
                  key="health"
                  pageSize={PageSize}
                  country="us"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="science"
              element={
                <News
                  setProgress={SetProgress}
                  key="science"
                  pageSize={PageSize}
                  country="us"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="sports"
              element={
                <News
                  setProgress={SetProgress}
                  key="sports"
                  pageSize={PageSize}
                  country="us"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="technology"
              element={
                <News
                  setProgress={SetProgress}
                  key="technology"
                  pageSize={PageSize}
                  country="us"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
}

export default App
