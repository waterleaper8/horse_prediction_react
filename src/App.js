import "./App.css"
import { Switch, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Predict } from "./components/Predict"
import { Odds } from "./components/Odds"
import { Footer } from "./components/Footer"
import { PredictApp } from "./components/PredictApp"
import Loader from "./components/Loader"
import { useState } from "react"
import { useEffect } from "react"
import { useTracking } from "./hooks/useTracking"
import { OddsApp } from "./components/OddsApp"

function App() {
  useTracking("G-0NGNESXE8K")

  const location = useLocation()
  const [loaded, setLoaded] = useState(false)
  function disableScroll(event) {
    event.preventDefault()
  }
  useEffect(() => {
    document.body.classList.add("hide")
    document.addEventListener("touchmove", disableScroll, { passive: false })
    setTimeout(() => {
      setLoaded(true)
      document.removeEventListener("touchmove", disableScroll, {
        passive: false,
      })
    }, 3000)
  }, [])

  return (
    <>
      <Loader className={loaded ? "fadeOut" : ""} loaded={loaded} />
      {/* <Loader loaded={loaded} /> */}
      <div className={"container-lg"}>
        <Header />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/">
              <Home />
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
            <Route path="/product/odds-app">
              <OddsApp />
            </Route>
          </Switch>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  )
}

export default App
