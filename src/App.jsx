import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { PatientsView } from "./components/PatientsView";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/patients" component={PatientsView} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
