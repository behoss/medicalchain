import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./views/HomeView";
import { PatientsView } from "./views/PatientsView";
import { About } from "./views/AboutView";
import { Navbar } from "./components/Navbar";
import { PatientsProvider } from "./contexts/PatientsProvider";

const App = () => {
  return (
    <BrowserRouter>
      <PatientsProvider>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/patients" component={PatientsView} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </PatientsProvider>
    </BrowserRouter>
  );
};

export default App;
