import { Route, Switch } from "react-router";
import "./style/App.scss";
import NavBar from "./components/navbar/NavBar";
import BannerCarousel from "./components/Banner";
import PostBody from "./PostBody";
import LoginHome from "./admin/LoginHome";
import HomePage from "./pages/HomePage";
import LiteraturePage from "./pages/LiteraturePage";
import AspPage from "./pages/AspPage";
import EconomicPage from "./pages/EconomicPage";
import GamingPage from "./pages/GamingPage";
import IosPage from "./pages/IosPage";
import WebPage from "./pages/WebPage";
import GraphicPage from "./pages/GraphicPage";


function App() {

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <NavBar />

          <BannerCarousel />
          <HomePage />
        </Route>

        <Route path="/LiteraturePage">
          <NavBar />
          <BannerCarousel />
          <LiteraturePage />
        </Route>

        <Route path="/GamingPage">
          <NavBar />
          <BannerCarousel />
          <GamingPage />
        </Route>

        <Route path="/EconomicPage">
          <NavBar />
          <BannerCarousel />
          <EconomicPage />
        </Route>

        <Route path="/IosPage">
          <NavBar />
          <BannerCarousel />
          <IosPage />
        </Route>

        <Route path="/WebPage">
          <NavBar />
          <BannerCarousel />
          <WebPage />
        </Route>

        <Route path="/AspPage">
          <NavBar />
          <BannerCarousel />
          <AspPage />
        </Route>

        <Route path="/GraphicPage">
          <NavBar />
          <BannerCarousel />
          <GraphicPage />
        </Route>

        <Route path="/Event/:id">
          <PostBody />
        </Route>
        <LoginHome />
      </Switch>
    </div>
  );
}

export default App;
