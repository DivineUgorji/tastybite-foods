import Header from "./components/sections/Header";
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
        </Header>

        <MobileMenu />
      </Page>
    </MobileMenuContextProvider>
  );
}

export default App;
