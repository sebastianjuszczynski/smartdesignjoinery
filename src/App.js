import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Contact from "./components/Contact";
import GalleryWardrobe from "./components/GalleryWardrobe";
import GalleryStairs from "./components/GalleryStairs";
import GalleryDoors from "./components/GalleryDoors";
import Home from "./components/Home";
import Footer from './components/Footer';
import { toHome, toDoors, toStairs, toWardrobes, toContact, toPrivacyPolicy } from "./routes";
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
      <Route path={toWardrobes()}>
        <GalleryWardrobe />
      </Route>
      <Route path={toStairs()}>
        <GalleryStairs />
      </Route>
      <Route path={toDoors()}>
        <GalleryDoors />
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
