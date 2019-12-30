import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Exercises from "./components/Exercises";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/exercises" component={Exercises} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
