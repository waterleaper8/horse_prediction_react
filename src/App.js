import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Predict } from "./components/Predict";
import { Odds } from "./components/Odds";
import { Footer } from "./components/Footer";
import { PredictApp } from "./components/PredictApp";

function App() {
  return (
    <BrowserRouter basename="/horse_prediction_react/">
      <div className={"container-lg"}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/product/predict">
            <Predict />
          </Route>
          <Route path="/product/odds">
            <Odds />
          </Route>
          <Route path="/product/predict-app/">
            <PredictApp />
          </Route>
          <Route component={Home} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
