import "./App.css";
import About from "./Section/About";
import Home from "./Section/Home";
import Skill from "./Section/Skill";
import Project from "./Section/Project";
import Exp from "./Section/Exp";
import Testimonial from "./Section/Testimonial";
import Contact from "./Section/Contact";
import Footer from "./Section/Footer";
import Nav from "./Components/Nav";
import Particle from "./Components/Particle";

function App() {
  return (
    <div className="relative gradient text-white">
      <Particle></Particle>
      <Nav></Nav>
      <Home></Home>
      <About></About>
      <Skill></Skill>
      <Project></Project>
      <Exp></Exp>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
