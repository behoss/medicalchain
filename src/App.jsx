import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Home } from "./views/HomeView";
import { PatientsView } from "./views/PatientsView";
import { About } from "./views/AboutView";
import { Navbar } from "./components/Navbar";
import { PatientsProvider } from "./contexts/PatientsProvider";

const App = () => {
  const location = useLocation();
  return (
    <PatientsProvider>
      <Navbar />
      <div className="container">
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route exact path="/" component={Home} />
            <Route path="/patients" component={PatientsView} />
            <Route path="/about" component={About} />
          </Switch>
        </AnimatePresence>
      </div>
    </PatientsProvider>
  );
};

export default App;
