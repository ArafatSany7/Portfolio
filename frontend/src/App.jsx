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

function App() {
  return (
    <div>
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
