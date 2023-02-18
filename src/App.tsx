import { About } from "./components/About/About";
import { Expereciences } from "./components/Expereciences/Expereciences";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
import { Technologies } from "./components/Technologies/Technologies";
import "./styles/global.scss";

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Expereciences />
      <Footer />
    </div>
  );
}

export default App;
