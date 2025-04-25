import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
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

        <MobileMenu />
      </Page>
    </MobileMenuContextProvider>
  );
}

export default App;
