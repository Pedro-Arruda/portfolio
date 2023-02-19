import { About } from "../About/About";
import { Expereciences } from "../Expereciences/Expereciences";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Hero } from "../Hero/Hero";
import { Projects } from "../Projects/Projects";
import { Technologies } from "../Technologies/Technologies";
import "../../styles/global.scss";

export default function Home() {
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
