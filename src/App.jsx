import Contact from "./components/sections/Contact";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Main from "./components/sections/Main";
import Menus from "./components/sections/Menus/Menus";
import MobileMenu from "./components/sections/MobileMenu/MobileMenu";
import Navigation from "./components/sections/Navigation";
import Page from "./components/sections/Page";
import { MobileMenuContextProvider } from "./Contexts/MobileMenuContext";

function App() {
  return (
    <MobileMenuContextProvider>
      <Page>
        <Header>
          <Navigation />
          <Hero />
        </Header>

        <Main>
          <Contact />
          <Menus />
        </Main>
        <MobileMenu />
      </Page>
    </MobileMenuContextProvider>
  );
}

export default App;
