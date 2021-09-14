import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import Information from "./components/Information";
import Pricing from "./components/Pricing";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import { toHome, toGallery, toPricing, toInformation } from "./routes";




function App() {
  return (
    <HashRouter>
      <NavBar />
    <Switch>
      <Route path={toHome()}>
        <Home />
      </Route>
      <Route path={toGallery()}>
        <Gallery />
      </Route>
      <Route path={toInformation()}>
        <Information />
      </Route>
      <Route path={toPricing()}>
        <Pricing />
      </Route>
      <Route>
        <Redirect to={toHome()} />
      </Route>
    </Switch>
  </HashRouter>
      
  );
}

export default App;
