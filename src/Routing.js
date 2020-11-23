import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AppHeader from "./components/AppHeader";
import ProjectContainer from "./components/ProjectContainer";

export default function App() {
  return (
    <Router>
        <Switch>
          <AppHeader>
            <Route path="/">
              <ProjectContainer/>
            </Route>
          </AppHeader>
        </Switch>
    </Router>
  );
}