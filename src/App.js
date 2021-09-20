import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import Information from "./components/Information";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Footer from './components/Footer';
import { toHome, toGallery, toContact, toInformation } from "./routes";
import ScrollToTopComponent from "./ScrollToTopComponent";




function App() {
  return (
    <HashRouter>
      <ScrollToTopComponent />
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
      <Route path={toContact()}>
        <Contact />
      </Route>
      <Route>
        <Redirect to={toHome()} />
      </Route>
    </Switch>
    <Footer />
  </HashRouter>
      
  );
}

export default App;
