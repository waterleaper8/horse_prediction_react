import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Predict } from "./components/Predict";
import { Odds } from "./components/Odds";
import { Footer } from "./components/Footer";
import { PredictApp } from "./components/PredictApp";
import Loader from "./components/Loader";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setLoaded(true);
      document.body.style.overflow = "visible";
    }, 5000);
  }, []);

  return (
    <>
      <Loader className={loaded ? "fadeOut" : ""} />
      <div className={"container-lg"}>
        <Header />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/product/predict">
              <Predict />
            </Route>
            <Route path="/product/predict-app">
              <PredictApp />
            </Route>
            <Route path="/product/odds">
              <Odds />
            </Route>
          </Switch>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
}

export default App;
