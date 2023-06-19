import "../main.scss";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Packages from "../components/Packages";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Bot from "../components/Bot";

export default function Home() {
  return (
    <div id="home" className="home">
      <NavBar />
      <Bot />
      <Header />
      <AboutUs />
      <Packages />
      <Reviews />
      <Contact />
    </div>
  );
}
