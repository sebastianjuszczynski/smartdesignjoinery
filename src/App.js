import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Footer from './components/Footer';
import { toHome, toGallery, toContact, toPrivacyPolicy } from "./routes";
import ScrollToTopComponent from "./ScrollToTopComponent";
import SimpleReactLightbox from 'simple-react-lightbox';




function App() {
  return (
    <SimpleReactLightbox>
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
      <Route path={toPrivacyPolicy()}>
        <PrivacyPolicy />
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
  </SimpleReactLightbox>
      
  );
}

export default App;
