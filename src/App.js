import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from "./Pages/Contact/Contact";
import Biography from "./Pages/Biography/Biography"
import Projects from "./Pages/Projects/Projects"
import Resume from "./Pages/Resume/Resume"
import { useState } from "react";


function App() {
  const [currentPage, setCurrentPage] = useState("Biography");
  function render() {
    if (currentPage === "Biography") {
      return <Biography />;
    } else if (currentPage === "Contact") {
      return <Contact />;
    } else if (currentPage === "Projects") {
      return <Projects />;
    } else if (currentPage === "Resume") {
      return <Resume />;
    }
  }
  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} />
      <div class="renderedData ">{render()}</div>
      <Footer />
    </>
  );
}

export default App;